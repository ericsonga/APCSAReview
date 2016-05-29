(function($, _) { // wrap in anonymous function to not show some helper variables

   // regexp used for trimming
   var trimRegexp = /^\s*(.*?)\s*$/;
   var translations = {
     fi: {
       sourceLabel: 'Raahaa rivit ohjelmaasi tästä',
       answerLabel: 'Muodosta ratkaisusi tähän',
       order: function() {
         return "Ohjelma sisältää vääriä palasia tai palasten järjestys on väärä. Tämä on mahdollista korjata siirtämällä, poistamalla tai vaihtamalla korostettuja palasia.";},
       lines_missing: function() {
         return "Ohjelmassasi on liian vähän palasia, jotta se toimisi oikein.";},
       lines_too_many: function() {
         return "Ohjelmassasi on liian monta palasta, jotta se toimisi oikein.";},
       no_matching: function(lineNro) {
         return "Korostettu palanen (" + lineNro + ") on sisennetty kieliopin vastaisesti."; },
       no_matching_open: function(lineNro, block) {
         return "Rivillä " + lineNro + " päätettävää " + block +
                 " lohkoa ei ole aloitettu."; },
       no_matching_close: function(lineNro, block) {
         return block + " lohkoa riviltä " + lineNro + " ei ole päätetty."; },
       block_close_mismatch: function(closeLine, closeBlock, openLine, inBlock) {
         return "Ei voi päättää lohkoa " + closeBlock + " rivillä " + closeLine +
                " oltaessa vielä lohkossa " + inBlock + " riviltä " + openLine; },
       block_structure: function(lineNro) {
         return "Korostettu palanen (" + lineNro + ") on sisennetty väärään koodilohkoon."; },
       unittest_error: function(errormsg) {
         return "<span class='msg'>Virhe ohjelman jäsentämisessä/suorituksessa</span><br/> <span class='errormsg'>" + errormsg + "</span>";
       },
       unittest_output_assertion: function(expected, actual) {
        return "Odotettu tulostus: <span class='expected output'>" + expected + "</span>" +
              "Ohjelmasi tulostus: <span class='actual output'>" + actual + "</span>";
       },
       unittest_assertion: function(expected, actual) {
        return "Odotettu arvo: <span class='expected'>" + expected + "</span><br>" +
              "Ohjelmasi antama arvo: <span class='actual'>" + actual + "</span>";
       },
       variabletest_assertion: function(varname, expected, actual) {
        return "Muuttujan " + varname + " odotettu arvo: <span class='expected'>" + expected + "</span> " +
              "Ohjelmasi antama arvo: <span class='actual'>" + actual + "</span>";
       }
     },
     en: {
       sourceLabel: 'Drag from here',
       answerLabel: 'Construct your solution here',
       order: function() {
         return "Code fragments in your program are wrong, or in wrong order. This can be fixed by moving, removing, or replacing highlighted fragments.";},
       lines_missing: function() {
         return "Your program has too few code fragments.";},
       lines_too_many: function() {
         return "Your program has too many code fragments.";},
       no_matching: function(lineNro) {
         return "Based on language syntax, the highlighted fragment (" + lineNro + ") is not correctly indented."; },
       no_matching_open: function(lineNro, block) {
         return "The " + block + " ended on line " + lineNro + " never started."; },
       no_matching_close: function(lineNro, block) {
         return "Block " + block + " defined on line " + lineNro + " not ended properly";
       },
       block_close_mismatch: function(closeLine, closeBlock, openLine, inBlock) {
         return "Cannot end block " + closeBlock + " on line " + closeLine + " when still inside block " + inBlock + " started on line " + openLine;
       },
       block_structure: function(lineNro) { return "The highlighted fragment " + lineNro + " belongs to a wrong block (i.e. indentation)."; },
       unittest_error: function(errormsg) {
         return "<span class='msg'>Error in parsing/executing your program</span><br/> <span class='errormsg'>" + errormsg + "</span>";
       },
       unittest_output_assertion: function(expected, actual) {
        return "Expected output: <span class='expected output'>" + expected + "</span>" +
              "Output of your program: <span class='actual output'>" + actual + "</span>";
       },
       unittest_assertion: function(expected, actual) {
        return "Expected value: <span class='expected'>" + expected + "</span><br>" +
              "Actual value: <span class='actual'>" + actual + "</span>";
       },
       variabletest_assertion: function(varname, expected, actual) {
        return "Expected value of variable " + varname + ": <span class='expected'>" + expected + "</span><br>" +
              "Actual value: <span class='actual'>" + actual + "</span>";
       }
     }
   };

  // Different graders

  var graders = {};
  // Grader that will execute the code and check variable values after that
  // Expected and supported options:
  //  - vartests (required): array of variable test objects
  // Each variable test object can/must have the following properties:
  //  - initcode: code that will be prepended before the learner solution code
  //  - code: code that will be appended after the learner solution code
  //  - message (required): a textual description of the test, shown to learner
  // Properties specifying what is tested:
  //  - variables: an object with properties for each variable name to
  //                          be tested; the value of the property is the expected
  //                          value
  // or
  //  - variable: a variable name to be tested
  //  - expected: expected value of the variable after code execution
  var VariableCheckGrader = function(widget) {
    this.widget = widget;
  };
  graders.VariableCheckGrader = VariableCheckGrader;
  // Executes the given Python code and returns an object with two properties:
  //  mainmod: the result of Skulpt importMainWithBody call with the given code
  //  output: the output of the program
  // Note, that the Skulpt execution can throw an exception, which will not be handled
  // by this function, so the caller should take care of that.
  VariableCheckGrader.prototype._python_exec = function(code) {
      var output = "";
      // function for reading python imports with skulpt
      function builtinRead(x) {
        if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
          throw "File not found: '" + x + "'";
        return Sk.builtinFiles["files"][x];
      }
      // configure Skulpt
      Sk.execLimit = this.widget.options.exec_limit || 2500; // time limit for the code to run
      Sk.configure({
          output: function(str) { output += str; },
          python3: this.widget.options.python3 || false,
          read: builtinRead
      });
      return {mainmod: Sk.importMainWithBody("<stdin>", false, code), output: output};
  };
  // Executes the given code using Skulpt and returns an object with variable
  // values of the variables given in the variables array.
  // Possible errors will be in the _error property of the returned object.
  // Output of the code will be in _output property of the result.
  // Example: this._variablesAfterExecution("x=0\ny=2\nprint x", ["x", "y"])
  //    will return object {"x": 0, "y": 2, "_output": "0"}
  VariableCheckGrader.prototype._variablesAfterExecution = function(code, variables) {
    var output = "",
      execResult, mainmod,
      result = {'variables': {}},
      varname;
    try {
      execResult = this._python_exec(code);
    } catch (e) {
      return {"_output": output, "_error": "" + e};
    }
    mainmod = execResult.mainmod;
    for (var i = 0; i < variables.length; i++) {
      varname = variables[i];
      result.variables[varname] = mainmod.tp$getattr(varname);
    }
    result._output = execResult.output;
    return result;
  };
  // Formats a JavaScript variable to the corresponding Python value *and*
  // formats a Skulpt variable to the corresponding Python value
  VariableCheckGrader.prototype.formatVariableValue = function(varValue) {
    var varType = typeof varValue;
    if (varType === "undefined" || varValue === null) {
      return "None";
    } else if (varType === "string") { // show strings in quotes
      return '"' + varValue + '"';
    } else if (varType === "boolean") { // Python booleans with capital first letter
      return varValue?"True":"False";
    } else if ($.isArray(varValue)) { // JavaScript arrays
      return '[' + varValue.join(', ') + ']';
    } else if (varType === "object" && varValue.tp$name === "number") { // Python numbers
      return varValue.v;
    } else if (varType === "object" && varValue.tp$name === "NoneType") { // None
      return "None";
    } else if (varType === "object" && varValue.tp$name === "bool") { // Python strings
      return varValue.v?"True":"False";
    } else if (varType === "object" && varValue.tp$name === "str") { // Python strings
      return '"' + varValue.v + '"';
    } else if (varType === "object" && varValue.tp$name === "list") { // Python lists
      return '[' + varValue.v.join(', ') + ']';
    } else {
      return varValue;
    }
  };
  // Fix or strip line numbers in the (error) message
  // Basically removes the number of lines in prependCode from the line number shown.
  VariableCheckGrader.prototype.stripLinenumberIfNeeded = function(msg, prependCode, studentCode) {
    var lineNbrRegexp = /.*on line ([0-9]+).*/;
    // function that fixes the line numbers in student feedback
    var match = msg.match(lineNbrRegexp);
    if (match) {
      var lineNo = parseInt(match[1], 10),
          lowerLimit = prependCode?
                          prependCode.split('\n').length
                          :0,
          upperLimit = lowerLimit + studentCode.split('\n').length - 1;
      // if error in prepended code or tests, remove the line number
      if (lineNo <= lowerLimit || lineNo > upperLimit) {
        return msg.replace(' on line ' + lineNo, '');
      } else if (lowerLimit > 0) {
        // if error in student code, make sure the line number matches student lines
        return msg.replace(' on line ' + lineNo, ' on line ' + (lineNo - lowerLimit));
      }
    }
    return msg;
  };
  //Return executable code in one string
  VariableCheckGrader.prototype._codelinesAsString = function() {
    var student_code = this.widget.getModifiedCode("#area-" + this.widget.options.answerId);
    var executableCode = "";
    $.each(student_code, function(index, item) {
      // split codeblocks on br elements
      var lines = $("#" + item.id).html().split(/<br\s*\/?>/);
      // go through all the lines
      for (var i = 0; i < lines.length; i++) {
        // add indents and get the text for the line (to remove the syntax highlight html elements)
        executableCode += python_indents[item.viewIndent] + $("<span>" + lines[i] + "</span>").text() + "\n";
      }
    });
    return executableCode;
  };
  VariableCheckGrader.prototype.grade = function(studentcode) {
    var parson = this.widget,
        that = this,
        feedback = "",
        log_errors = [],
        all_passed = true;
    $.each(parson.options.vartests, function(index, testdata) {
      var student_code = studentcode || that._codelinesAsString();
      var executableCode = (testdata.initcode || "") + "\n" + student_code + "\n" + (testdata.code || "");
      var variables, expectedVals;

      if ('variables' in testdata) {
        variables = _.keys(testdata.variables);
        expectedVals = testdata.variables;
      } else {
        variables = [testdata.variable];
        expectedVals = {};
        expectedVals[testdata.variable] = testdata.expected;
      }
      var res = that._variablesAfterExecution(executableCode, variables);
      var testcaseFeedback = "",
          success = true,
          log_entry = {'code': testdata.code, 'msg': testdata.message},
          expected_value,
          actual_value;
      if ("_error" in res) {
        testcaseFeedback += parson.translations.unittest_error(that.stripLinenumberIfNeeded(res._error,
                                                                                      testdata.initcode,
                                                                                      student_code));
        success = false;
        log_entry.type = "error";
        log_entry.errormsg = res._error;
      } else {
        log_entry.type = "assertion";
        log_entry.variables = {};
        for (var j = 0; j < variables.length; j++) {
          var variable = variables[j],
              variableSuccess;
          if (variable === "__output") { // checking output of the program
            expected_value = expectedVals[variable];
            actual_value = res._output;
            variableSuccess = (actual_value == expected_value); // should we do a strict test??
            testcaseFeedback += "<div class='" + (variableSuccess?"pass":"fail") + "'>";
            testcaseFeedback += parson.translations.unittest_output_assertion(expected_value, actual_value) +
                                "</div>";
          } else {
            expected_value = that.formatVariableValue(expectedVals[variable]);
            actual_value = that.formatVariableValue(res.variables[variable]);
            variableSuccess = (actual_value == expected_value);  // should we do a strict test??
            testcaseFeedback += "<div class='" + (variableSuccess?"pass":"fail") + "'>";
            testcaseFeedback += parson.translations.variabletest_assertion(variable, expected_value, actual_value) +
                                "</div>";
          }
          log_entry.variables[variable] = {expected: expected_value, actual: actual_value};
          if (!variableSuccess) {
            success = false;
          }
        }
      }
      all_passed = all_passed && success;
      log_entry.success = success;
      log_errors.push(log_entry);
      feedback += "<div class='testcase " + (success?"pass":"fail") +
                  "'><span class='msg'>" + testdata.message + "</span><br>" +
                  testcaseFeedback + "</div>";
    });
    return { html: feedback, tests: log_errors, success: all_passed };
  };

  // A grader to be used for exercises which draw turtle graphics.
  // Required options:
  //  - turtleModelCode: The code constructing the model drawing. The turtle is initialized
  //                    to modelTurtle variable, so your code should use that variable.
  //
  // Options that can be specified (that is, optional):
  //  - turtlePenDown: a boolean specifying whether or not the pen should be put down
  //                   initially for the student constructed code
  //  - turtleModelCanvas: ID of the canvas DOM element where the model solution will be drawn.
  //                  Defaults to modelCanvas.
  //  - turtleStudentCanvas: ID of the canvas DOM element where student turtle will draw.
  //                  Defaults to studentCanvas.
  //
  // Grading is based on comparing the commands executed by the model and student turtle.
  // If the executable_code option is also specified, the code on each line of that option will
  // be executed instead of the code in the student constructed lines. Note, that the student
  // code should use the variable myTurtle for commands to control the turtle in order for the
  // grading to work.
  var TurtleGrader = function(p) {
    this.widget = p;
    // execute the model solution turtlet path to have the target "picture" visible in the
    // beginning
    var modelCommands = this._executeTurtleModel();

    // specify variable tests for the commands executed by the student turtlet and the model
    var penDown = typeof p.options.turtlePenDown === "boolean"?p.options.turtlePenDown:true;
    var vartests = [
      {initcode: "import parsonturtle\nmyTurtle = parsonturtle.ParsonTurtle()\n" +
        "myTurtle.speed(0.3)\nmyTurtle.pensize(3, False)\n" +
        (penDown ? "" : "myTurtle.up()\n"), // set the state of the pen
        code: (p.options.turtleTestCode?p.options.turtleTestCode:"") + "\ncommands = myTurtle.commands()",
        message: "", variables: {commands: modelCommands}}
    ];
    // set the vartests in the parson options
    p.options.vartests = vartests;
  };
  // expose the grader to ParsonsWidget._graders
  graders.TurtleGrader = TurtleGrader;
  // copy the python execution functions from VariableCheckGrader
  TurtleGrader.prototype._python_exec = VariableCheckGrader.prototype._python_exec;
  TurtleGrader.prototype._variablesAfterExecution = VariableCheckGrader.prototype._variablesAfterExecution;
  // Execute the model turtlet code
  TurtleGrader.prototype._executeTurtleModel = function() {
    var code = "import parsonturtle\nmodelTurtle = parsonturtle.ParsonTurtle()\n" +
               "modelTurtle.color(160, 160, 160, False)\n" +
                this.widget.options.turtleModelCode +
               "\ncommands = modelTurtle.commands()\n";
    Sk.canvas = this.widget.options.turtleModelCanvas || "modelCanvas";
    var result = this._variablesAfterExecution(code, ["commands"]);
    if (!result.variables || !result.variables.commands || !result.variables.commands.v) {
      return "None";
    }
    return result.variables.commands.v;
  };
  // grade the student solution
  TurtleGrader.prototype.grade = function() {
    // set the correct canvas where the turtle should draw
    Sk.canvas = this.widget.options.turtleStudentCanvas || "studentCanvas";
    // Pass the grading on to either the LangTranslationGrader or VariableChecker
    if (this.widget.options.executable_code) {
      return new LanguageTranslationGrader(this.widget).grade();
    } else {
      return new VariableCheckGrader(this.widget).grade();
    }
  };

  // Grader that will execute student code and Skulpt unittests
  var UnitTestGrader = function(widget) {
    this.widget = widget;
  };
  graders.UnitTestGrader = UnitTestGrader;
  // copy the line number fixer and code-construction from VariableCheckGrader
  UnitTestGrader.prototype.stripLinenumberIfNeeded = VariableCheckGrader.prototype.stripLinenumberIfNeeded;
  UnitTestGrader.prototype._codelinesAsString = VariableCheckGrader.prototype._codelinesAsString;
  // copy the python executor from VariableCheckGrager
  UnitTestGrader.prototype._python_exec = VariableCheckGrader.prototype._python_exec;
  // do the grading
  UnitTestGrader.prototype.grade = function(studentcode) {
    var success = true,
        parson = this.widget,
        unittests = parson.options.unittests,
        studentCode = studentcode || this._codelinesAsString(),
        feedbackHtml = "", // HTML to be returned as feedback
        result, mainmod;

    var executableCode = studentCode + "\n" + unittests;

    // if there is code to add before student code, add it
    if (parson.options.unittest_code_prepend) {
      executableCode = parson.options.unittest_code_prepend + "\n" + executableCode;
    }

    try {
      mainmod = this._python_exec(executableCode).mainmod;
      result = JSON.parse(mainmod.tp$getattr("_test_result").v);
    } catch (e) {
      result = [{status: "error", _error: e.toString() }];
    }

    // go through the results and generate HTML feedback
    for (var i = 0, l = result.length; i < l; i++) {
      var res = result[i];
      feedbackHtml += '<div class="testcase ' + res.status + '">';
      if (res.status === "error") { // errors in execution
        feedbackHtml += parson.translations.unittest_error(this.stripLinenumberIfNeeded(res._error,
                                                                    parson.options.unittest_code_prepend,
                                                                    studentCode));
        success = false;
      } else { // passed or failed tests
        feedbackHtml += '<span class="msg">' + this.stripLinenumberIfNeeded(res.feedback) + '</span><br />';
        feedbackHtml += 'Expected <span class="expected">' + res.expected +
                  '</span>' + res.test + '<span class="actual">' + res.actual +
                  '</span>';
        if (res.status === "fail") {
          success = false;
        }
      }
      feedbackHtml += '</div>';
    }

    return { html: feedbackHtml, tests: result, success: success };
  };

  // Code "Translating" grader
  var LanguageTranslationGrader = function(widget) {
    this.widget = widget;
  };
  // Add the grader to the list of graders
  graders.LanguageTranslationGrader = LanguageTranslationGrader;
  // add open/close block definitions for pseudocode
  var langBlocks = {};
  LanguageTranslationGrader._languageBlocks = langBlocks;
  // specify the blocks for the pseudo language as a simple example case
  langBlocks.pseudo = {
    open: {
      "^\s*IF.*THEN\s*$": "IF", "^\s*ELSE\s*$":"IF", // IF
      "^\s*WHILE.*DO\s*$": "WHILE", // WHILE
      "^\s*REPEAT.*TIMES\s*$": "REPEAT..TIMES",
      "^\s*REPEAT\s*$": "REPEAT",   // REPEAT ... UNTIL
      "^\s*FOR.*DO\s*$": "FOR",
      "^\s*FOR.*TO.*\s*$": "FOR",
      "^\s*MODULE.*\\)\s*$": "MODULE", "^\s*MODULE.*RETURNS.*$": "MODULE",
      "^\s*DO\s*$": "DO..WHILE"
    },
    close: {
      "^\s*ELSE\s*$": "IF", "^\s*ENDIF\s*$": "IF", // ENDIF
      "^\s*ENDWHILE\s*$": "WHILE",
      "^\s*ENDREPEAT\s*$": "REPEAT..TIMES",
      "^\s*UNTIL.*\s*$": "REPEAT",
      "^\s*ENDFOR\s*$": "FOR",
      "^\s*ENDMODULE\s*$": "MODULE",
      "^\s*WHILE(?!.*DO)": "DO..WHILE"
    }
  };
  langBlocks.java = {
    open: {
      "^.*\{\s*$": "block"
    },
    close: {
      "^.*\}\s*$": "block"
    }
  };
  LanguageTranslationGrader.prototype.grade = function() {
    var student_code = this.widget.getModifiedCode("#area-" + this.widget.options.answerId);

    // Check opening and closing blocks.
    // The block_open and block_close are expected to be maps with regexps as properties and
    // names of blocks as the property values. For example, a pseudocode IF..THEN..ELSE..ENDIF
    // blocks can be defined like this:
    //    open = {"^\s*IF.*THEN\s*$": "IF", "^\s*ELSE\s*$":"IF"};
    //    close = {"^s*ELSE\s*$": "IF", "^\s*ENDIF\s*$": "IF"};
    var open = this.widget.options.block_open,
        close = this.widget.options.block_close,
        blockErrors = [],
        i;
    var progLang = this.widget.options.programmingLang;
    if (progLang && LanguageTranslationGrader._languageBlocks[progLang]) {
      open = $.extend({}, open, LanguageTranslationGrader._languageBlocks[progLang].open);
      close = $.extend({}, close, LanguageTranslationGrader._languageBlocks[progLang].close);
    }

    if (open && close) { // check blocks only if block definitions are given
      var blocks = [],
          prevIndent = 0, // keep track of previous indent inside blocks
          minIndent = 0; // minimum indent needed inside newly opened blocks
      // go through all student code lines
      for (i = 0; i < student_code.length; i++) {
        var isClose = false, // was a new blocks opened on this line
            isOpen = false,  // was a block closed on this line
            item = student_code[i],
            line = $("#" + item.id).text(), // code of the line
            topBlock, bO;

        // Check if a proper indentation or the line was found in normalizeIndents
        // -1 will mean no matching indent was found
        if (item.distractor) {
          blockErrors.push(this.widget.translations.no_matching(i + 1));
          $("#" + item.id).addClass("incorrectIndent");
          break; // break on error
        }

        // Go through all block closing regexps and test if they match
        // Some lines can both close and open a block (such as else), so the
        // closing blocks need to be handled first
        for (var blockClose in close) {
          if (new RegExp(blockClose).test(line)) {
            isClose = true;
            topBlock = blocks.pop();
            if (!topBlock) {
              blockErrors.push(this.widget.translations.no_matching_open(i + 1, close[blockClose]));
              $("#" + item.id).addClass("incorrectPosition");
            } else if (close[blockClose] !== topBlock.name) { // incorrect closing block
              blockErrors.push(this.widget.translations.block_close_mismatch(i + 1, close[blockClose], topBlock.line, topBlock.name));
              $("#" + item.id).addClass("incorrectPosition");
            } else if (student_code[i].viewIndent !== topBlock.indent) { // incorrect indent
              blockErrors.push(this.widget.translations.no_matching(i + 1));
              $("#" + item.id).addClass("incorrectIndent");
            }
            prevIndent = topBlock ? topBlock.viewIndent : 0;
            minIndent = 0;
            break; // only one block can be closed on a single line
          }
        }
        // Go through all block opening regexps and test if they match
        for (var blockOpen in open) {
          if (new RegExp(blockOpen).test(line)) {
            isOpen = true;
            bO = {name: open[blockOpen], indent: student_code[i].viewIndent, line: i + 1, item: item};
            blocks.push(bO);
            prevIndent = 0;
            minIndent = bO.viewIndent;
            break; // only one block can be opened on a single line
          }
        }
        // if not opening or closing a block, check block indentation
        if (!isClose && !isOpen && blocks.length > 0) {
          // indentation should match previous indent if inside block
          // and be greater than the indent of the block opening the block (minIndent)
          if ((prevIndent && student_code[i].viewIndent !== prevIndent) ||
              student_code[i].viewIndent <= minIndent) {
            blockErrors.push(this.widget.translations.no_matching(i + 1));
            $("#" + item.id).addClass("incorrectIndent");
          }
          prevIndent = student_code[i].viewIndent;
        }
        // if we have errors, clear the blocks and exit from the loop
        if (blockErrors.length > 0) {
          blocks = [];
          break;
        }
      }
      // create errors for all blocks opened but not closed
      for (i = 0; i < blocks.length; i++) {
        blockErrors.push(this.widget.translations.no_matching_close(blocks[i].line, blocks[i].name));
        $("#" + blocks[i].item.id).addClass("incorrectPosition");
      }
    }
    // if there were errors in the blocks, give feedback and don't execute the code
    if (blockErrors.length > 0) {
      var feedback = "<div class='testcase fail'>",
          fbmsg = "";
      for (i = 0; i < blockErrors.length; i++) {
        fbmsg += blockErrors[i] + "</br>";
      }
      feedback += this.widget.translations.unittest_error(fbmsg);
      feedback += "</div>";
      return { html: feedback, success: false };
    }

    // Replace codelines show with codelines to be executed
    var code = this._replaceCodelines();
    // run unit tests or variable check grader
    if (this.widget.options.unittests) {
      return new UnitTestGrader(this.widget).grade(code);
    } else {
      return new VariableCheckGrader(this.widget).grade(code);
    }
  };
  // Replaces codelines in the student's solution with the codelines
  // specified in the executable_code option of the parsons widget.
  // The executable_code option can be an array of lines or a string (in
  // which case it will be split on newline.
  // For each line in the model solution, there should be a matching line
  // in the executable_code.
  LanguageTranslationGrader.prototype._replaceCodelines = function() {
    var student_code = this.widget.getModifiedCode("#area-" + this.widget.options.answerId),
        executableCodeString = "",
        parson = this.widget,
        executableCode = parson.options.executable_code;
    if (typeof executableCode === "string") {
      executableCode = executableCode.split("\n");
    }
    // replace each line with in solution with the corresponding line in executable code
    var toggleRegexp = new RegExp("\\$\\$toggle(" + parson.options.toggleSeparator + ".*?)?\\$\\$", "g");
    $.each(student_code, function(index, item) {
      var ind = parseInt(item.id.replace(parson.id_prefix, ''), 10);

      // Handle toggle elements. Expects the toggle areas in executable code to be marked
      // with $$toggle$$ and there to be as many toggles in executable code than in the
      // code shown to learner.
      var execline = executableCode[ind];
      var toggles = execline.match(toggleRegexp);
      if (toggles) {
        for (var i = 0; i < toggles.length; i++) {
          var opts = toggles[i].substring(10, toggles[i].length - 2).split(parson.options.toggleSeparator);
          if (opts.length >= 1 && opts[0] !== "$$") {
            // replace the toggle content with Python executable version as well
            execline = execline.replace(toggles[i], opts[item.selectedToggleIndex(i)]);
          } else { // use the same content for the toggle in Python
            execline = execline.replace(toggles[i], item.toggleValue(i));
          }
        }
      }
      var execlines = execline.split(/<br\s*\/?>/);
      for (i = 0; i < execlines.length; i++) {
        // add the modified codeline to the executable code
        executableCodeString += python_indents[item.viewIndent] + execlines[i] + "\n";
      }
    });
    return executableCodeString;
  };

	// The "original" grader for giving line based feedback.
	// parson is a ParsonsWidget
	var LineBasedGrader = function(widget) {
		this.widget = widget;
	};
	graders.LineBasedGrader = LineBasedGrader;
	
	// grade that element
	LineBasedGrader.prototype.grade = function() {
		var widget = this.widget;
		var solutionLines = widget.solutionLines();
		var answerLines = widget.answerLines();
		var answerArea = $("#area-" + widget.options.answerId);
		var wrongOrder = false;
		
		var answerLinesInSolution = [];
		var answerLinesNotInSolution = [];
		var line;
		for (var i = 0; i < answerLines.length; i++) {
			line = answerLines[i];
			if ($.inArray(solutionLines, line)) {
				answerLinesInSolution.push(line);
			} else {
				answerLinesNotInSolution.push(line);
			}
		}
		
		// Determine whether the code is in the correct order
		var isCorrectOrder = false;
		if (answerLines.length == solutionLines.length) {
			isCorrectOrder = true;
			for (i = 0; i < solutionLines.length; i++) {
				if (!answerLines[i].code == solutionLines[i].code) {
					isCorrectOrder = false;
				}
			}
		}
		
		if (isCorrectOrder) {
			// Determine whether the indention is correct
			var incorrectIndention = [];
			for (i = 0; i < solutionLines.length; i++) {
				if (!answerLines[i].viewIndent() == solutionLines[i].modelIndent()) {
					incorrectIndention.push(answerLines[i]);
				}
			}
			if (incorrectIndention.length == 0) {
				// Perfect
				answerArea.addClass("correct");
			} else {
				// Mark indention errors
				var incorrectBlocks = [];
				for (i = 0; i < incorrectIndention.length; i++) {
					var block = incorrectIndention[i].block;
					if ($.inArray(incorrectBlocks, block) == -1) {
						incorrectBlocks.push(block);
						block.markIncorrectIndent();
					}
				}
			}
		} else {
			answerArea.addClass("incorrect");
		}
		return {};
	};


   var python_indents = [],
        spaces = "";
   for (var counter = 0; counter < 20; counter++) {
    python_indents[counter] = spaces;
    spaces += "  ";
   }

   var defaultToggleTypeHandlers = {
      boolean: ["True", "False"],
      compop: ["<", ">", "<=", ">=", "==", "!="],
      mathop: ["+", "-", "*", "/"],
      boolop: ["and", "or"],
      range: function($item) {
         var min = parseFloat($item.data("min") || "0"),
             max = parseFloat($item.data("max") || "10"),
             step = parseFloat($item.data("step") || "1"),
             opts = [],
             curr = min;
         while (curr <= max) {
            opts.push("" + curr);
            curr += step;
         }
         return opts;
      }
   };
   var addToggleableElements = function(widget) {
      for (var i = 0; i < widget.blocks.length; i++) {
        widget.blocks[i]._addToggles();
      }
      // toggleable elements are only enabled for unit tests
      if (!widget.options.unittests && !widget.options.vartests) { return; }
      var handlers = $.extend(defaultToggleTypeHandlers, widget.options.toggleTypeHandlers),
          context = $("#" + widget.options.answerId + ", #" + widget.options.sourceId);
      $(".jsparson-toggle", context).each(function(index, item) {
         var type = $(item).data("type");
         if (!type) { return; }
         var handler = handlers[type],
             jspOptions;
         if ($.isFunction(handler)) {
            jspOptions = handler($(item));
         } else {
            jspOptions = handler;
         }
         if (jspOptions && $.isArray(jspOptions)) {
            $(item).attr("data-jsp-options", JSON.stringify(jspOptions));
         }
      });
      // register a click handler for all the toggleable elements (and unregister existing)
      context.off("click", ".jsparson-toggle").on("click", ".jsparson-toggle", function() {
         var $this = $(this),
             curVal = $this.text(),
             choices = $this.data("jsp-options"),
             newVal = choices[(choices.indexOf(curVal) + 1)%choices.length],
             $parent = $this.parent("li");
         // clear existing feedback
         widget.clearFeedback();
         // change the shown toggle element
         $this.text(newVal);
         // log the event
         widget.addLogEntry({type: "toggle", oldvalue: curVal, newvalue: newVal,
                           target: $parent[0].id,
                           toggleindex: $parent.find(".jsparson-toggle").index($this)});
      });
   };

	// Create a line object with the following
	//   block = the block that this line is in
	//   text = the text of the code line
	//   indent = the indent level
	var ParsonsCodeline = function(codestring, block) {
		this.block = block;
		var trimmed = codestring.replace(/\s*$/, "");
		this.text = trimmed.replace(/^\s*/, "");
		this.indent = trimmed.length - this.text.length;
	};
	
	// Answer the indent of this codeline as determined by the view (answer)
	ParsonsCodeline.prototype.viewIndent = function() {
		return this.indent + this.block.viewIndent;
	}

	// Answer the indent of this codeline as determined by the model (solution)
	ParsonsCodeline.prototype.modelIndent = function() {
		return this.indent + this.block.indent;
	}

	// Answer an HTML representation of this codeline
	ParsonsCodeline.prototype.asHTML = function() {
		var html = '<code class="prettyprint lang-py';
		var indent = this.indent;
		if (this.block.widget.options.noindent) {
			indent += this.block.indent;
		}
		if (indent > 0) {
			html += ' indent' + indent;
		}
		html += '">' + this.text + '<\/code>';
		return html;
	};
	
	// Answer a text representation (i.e. code) of this codeline
	ParsonsCodeline.prototype.asText = function() {
		var text = '';
		var indent = this.indent + this.block.indent;
		for (var i = 0; i < indent; i++) {
			// four spaces for each indent
			text += '    ';
		}
		text += this.text;
		return text;
	};
	
	// Create a code block object based on the codestring
	//   widget: the ParsonsWidget
	//   lines: an array of ParsonsCodeline
	//   indent: how indented is the code based on spaces
	//   distractor: boolean as to whether it is not part of the solution
	//   paired: boolean whether this distractor should be paired with last valid line
	var ParsonsCodeblock = function(codestring, widget) {
		this.widget = widget;
		this.lines = [];
		this.indent = 0;
		this._toggles = [];
		if (codestring) {
			var code = codestring;
			var options = {};
			// Figure out options based on the #option and #option=value syntax
			// Remove the options from the code
			code = code.replace(/#(\w+)=(\w+)/, function(mystring, arg1, arg2) {
				options[arg1] = arg2;
				return ""
			});
			code = code.replace(/#(\w+)/, function(mystring, arg1) {
				options[arg1] = true;
				return ""
			});
			
			// Based on the options, determine the distractors
			if (options["paired"]) {
				// paired distractor
				delete options["paired"];
				this.distractor = true;
				this.paired = true;
			} else if (options["distractor"]) {
				// distractor
				delete options["distractor"];
				this.distractor = true;
				this.paired = false;
			} else {
				// This line is part of the solution
				this.distractor = false;
				this.paired = false;
			}
			
			//Report unused options
			for (var option in options) {
				console.log(option + " is not a valid #option for a code block");
			}
			
			code = code.split(/\\n/);
			for (var i = 0; i < code.length; i++) {
				code[i] = new ParsonsCodeline(code[i], this);
			}
			this.lines = code;
		}
	};
	
	// Used to normalize indents
	ParsonsCodeblock.prototype.addIndentsTo = function(array) {
		for (var i = 0; i < this.lines.length; i++) {
			var value = this.indent + this.lines[i].indent;
			if ($.inArray(value, array) == -1) {
				array.push(value);
			}			
		}
	};
	
	// Normalize indents based on array of indents
	ParsonsCodeblock.prototype.normalizeIndents = function(array) {
		var minIndent = 1000;
		for (var i = 0; i < this.lines.length; i++) {
			var value = this.indent + this.lines[i].indent;
			value = array.indexOf(value);
			this.lines[i].indent = value;
			minIndent = Math.min(minIndent, value);
		}
		this.indent = minIndent;
		for (i = 0; i < this.lines.length; i++) {
			this.lines[i].indent = this.lines[i].indent - minIndent;
		}		
	};

	// Answer an HTML representation of this codeblock
	ParsonsCodeblock.prototype.asHTML = function() {
		var html = '<div id="' + this.id + '" class="block">';
		for (var i = 0; i < this.lines.length; i++) {
			html += this.lines[i].asHTML();
		}
		html += '<\/div>';
		return html;
	};

	// Answer a text representation (i.e. code) of this codeblock
	ParsonsCodeblock.prototype.asText = function() {
		var text = this.lines[0].asText;
		for (var i = 1; i < this.lines.length; i++) {
			text += '\n' + this.lines[i].asText();
		}
		return text;
	};

  ParsonsCodeblock.prototype.elem = function() {
    // the element will change on shuffle, so we should re-fetch it every time
    return $("#" + this.id);
  };
  ParsonsCodeblock.prototype.markCorrect = function() {
    this.elem().addClass(this.widget.FEEDBACK_STYLES.correctPosition);
  };
  ParsonsCodeblock.prototype.markIncorrectPosition = function() {
    this.elem().addClass(this.widget.FEEDBACK_STYLES.incorrectPosition);
  };
  ParsonsCodeblock.prototype.markIncorrectIndent = function() {
    this.elem().addClass(this.widget.FEEDBACK_STYLES.incorrectIndent);
  };
  //
  ParsonsCodeblock.prototype._addToggles = function() {
    var toggleRegexp = new RegExp("\\$\\$toggle(" + this.widget.options.toggleSeparator + ".*?)?\\$\\$", "g");
    var toggles = this.code.match(toggleRegexp);
    var that = this;
    this._toggles = [];
    if (toggles) {
      var html = this.code;
      for (var i = 0; i < toggles.length; i++) {
        var opts = toggles[i].substring(10, toggles[i].length - 2).split(this.widget.options.toggleSeparator);
        html = html.replace(toggles[i], "<span class='jsparson-toggle' data-jsp-options='" +
                      JSON.stringify(opts).replace("<", "&lt;") + "'></span>");

      }
      this.elem().html(html);
      this.elem().find(".jsparson-toggle").each(function(index, item) {
        that._toggles.push(item);
      });
    }
  };
  // Returns the number of toggleable elements in this code block
  ParsonsCodeblock.prototype.toggleCount = function() {
    return this._toggles.length;
  };
  // Returns the index of the currently selected toggle option for the
  // toggle element at given index
  ParsonsCodeblock.prototype.selectedToggleIndex = function(index) {
    if (index < 0 || index >= this._toggles.length) { return -1; }
    var elem = this._toggles[index];
    var opts = $(elem).data("jsp-options");
    return opts.indexOf(elem.textContent);
  };
  // Returns the value of the toggleable element at the given index (0-based)
  ParsonsCodeblock.prototype.toggleValue = function(index) {
    if (index < 0 || index >= this._toggles.length) { return undefined; }
    return this._toggles[index].textContent;
  };
  // expose the type for testing, extending etc
  window.ParsonsCodeblock = ParsonsCodeblock;

	// Creates a parsons widget. Init must be called after creating an object.
	var ParsonsWidget = function(options) {     
     //To collect statistics, feedback should not be based on this
     this.user_actions = [];
     
     //State history for feedback purposes
     this.state_path = [];
     this.states = {};
     
     var defaults = {
       'incorrectSound': false,
       'x_indent': 40,
       'feedback_cb': false,
       'first_error_only': true,
       'lang': 'en',
       'toggleSeparator': '::'
     };
     
     this.options = jQuery.extend({}, defaults, options);
     this.feedback_exists = false;
     this.id_prefix = options['answerId'] + 'codeline';
     if (translations.hasOwnProperty(this.options.lang)) {
       this.translations = translations[this.options.lang];
     } else {
       this.translations = translations['en'];
     }

     // translate sourceLabel and answerLabel
     if (!this.options.hasOwnProperty("sourceLabel")) {
         this.options.sourceLabel = this.translations.sourceLabel;
     }
     if (!this.options.hasOwnProperty("answerLabel")) {
         this.options.answerLabel = this.translations.answerLabel;
     }
     this.FEEDBACK_STYLES = { 'correctPosition' : 'correctPosition',
                              'incorrectPosition' : 'incorrectPosition',
                              'correctIndent' : 'correctIndent',
                              'incorrectIndent' : 'incorrectIndent'};

    // use grader passed as an option if defined and is a function
    if (this.options.grader && _.isFunction(this.options.grader)) {
      this.grader = new this.options.grader(this);
    } else {
      // initialize the grader
      if (typeof(this.options.unittests) !== "undefined") { /// unittests are specified
        this.grader = new UnitTestGrader(this);
      } else if (typeof(this.options.vartests) !== "undefined") { /// tests for variable values
        this.grader = new VariableCheckGrader(this);
      } else { // "traditional" parson feedback
        this.grader = new LineBasedGrader(this);
      }
    }
   };
  ParsonsWidget._graders = graders;

	// Initialize the ParsonsWidget object with the following properties
	//   blocks: an array of codeblocks as they are specified in the HTML text
	//   solution: the array of codeblocks that is the solution
	ParsonsWidget.prototype.init = function(text) {
		var that = this;
		var id_prefix = this.id_prefix;
		
		// Create the initial blocks
		var aBlock, blocks = [];
		$.each(text.split("\n"), function(index, item) {
			aBlock = new ParsonsCodeblock(item, that);
			aBlock.index = index;
			aBlock.id = id_prefix + index;
			aBlock.viewIndent = 0;
			blocks.push(aBlock);
		});
		// Normalize the indents
		var indents = [];
		for (i = 0; i < blocks.length; i++) {
			blocks[i].addIndentsTo(indents);
		}
		indents = indents.sort(function(a, b){return a-b});
		for (i = 0; i < blocks.length; i++) {
			blocks[i].normalizeIndents(indents);
		}
		
		// For convenience sake, create the solution.
		// Note that this can always be reconstructed from the blocks
		var solution = [];
		$.each(blocks, function(index, item) {
			if (!item.distractor) {
				solution.push(item);
			}
		});
		
		this.blocks = blocks;
		this.solution = solution;
		this.resetView();
	};

	// Create a hash that identifies the block order and indentation
	ParsonsWidget.prototype.getHash = function(searchString) {
		var hash = [],
			divs = $(searchString)[0].getElementsByTagName('div'),
			block;
		for (var i = 0; i < divs.length; i++) {
			block = this.getBlockById(divs[i].id);
			hash.push(block.index + "_" + block.viewIndent);
		}
		//prefix with something to handle empty output situations
		if (hash.length === 0) {
			return "-";
		} else {
			return hash.join("-");
		}
	};
   
   ParsonsWidget.prototype.answerHash = function() {
       return this.getHash("#area-" + this.options.answerId);
   };

   ParsonsWidget.prototype.sourceHash = function() {
       return this.getHash("#area-" + this.options.sourceId);
   };

   ParsonsWidget.prototype.whatWeDidPreviously = function() {
     var hash = this.answerHash();
     var previously = this.states[hash];
     if (!previously) { return undefined; }
     var visits = _.filter(this.state_path, function(state) {
                             return state == hash;
                           }).length - 1;
     var i, stepsToLast = 0, s,
        outputStepTypes = ['removeOutput', 'addOutput', 'moveOutput'];
     for (i = this.state_path.length - 2; i > 0; i--) {
       s = this.states[this.state_path[i]];
       if (s && outputStepTypes.indexOf(s.type) != -1) {
         stepsToLast++;
       }
       if (hash === this.state_path[i]) { break; }
     }
     return $.extend(false, {'visits': visits, stepsToLast: stepsToLast}, previously);
   };

  /**
    * Returns states of the toggles for logging purposes
    */
  ParsonsWidget.prototype._getToggleStates = function() {
    var context = $("#" + this.options.answerId + ", #" + this.options.sourceId),
        toggles = $(".jsparson-toggle", context),
        toggleStates = {};
    $("#" + this.options.answerId + " .jsparson-toggle").each(function() {
      if (!toggleStates.output) {
        toggleStates.output = [];
      }
      toggleStates.output.push($(this).text());
    });
    if (this.options.sourceId) {
      toggleStates.input = [];
      $("#" + this.options.sourceId + " .jsparson-toggle").each(function() {
        toggleStates.input.push($(this).text());
      });
    }
    if ((toggleStates.output && toggleStates.output.length > 0) ||
                  (toggleStates.input && toggleStates.input.length > 0)) {
      return toggleStates;
    } else {
      return undefined;
    }
  };

   ParsonsWidget.prototype.addLogEntry = function(entry) {
     var state, previousState;
     var logData = {
       "time" : new Date(),
       "answer" : this.answerHash(),
       "type": "action"
     };

     if (this.options.sourceId) {
       logData.input = this.sourceHash();
     }

     if (entry.target) {
       entry.target = entry.target.replace(this.id_prefix, "");
     }

     // add toggle states to log data if there are toggles
     var toggles = this._getToggleStates();
     if (toggles) {
       logData.toggleStates = toggles;
     }

     state = logData.answer;

     jQuery.extend(logData, entry);
     this.user_actions.push(logData);

     //Updating the state history
     if(this.state_path.length > 0) {
       previousState = this.state_path[this.state_path.length - 1];
       this.states[previousState] = logData;
     }

     //Add new item to the state path only if new and previous states are not equal
     if (this.state_path[this.state_path.length - 1] !== state) {
       this.state_path.push(state);
     }
     // callback for reacting to actions
     if ($.isFunction(this.options.action_cb)) {
       this.options.action_cb.call(this, logData);
     }
   };

	// Return a block object by the full id including id prefix
	ParsonsWidget.prototype.getBlockById = function(id) {
		for (var i = 0; i < this.blocks.length; i++) {
			var block = this.blocks[i];
			if (block.id == id) {
				return block;
			}
		}
		return undefined;
	};

	// Retrieve the codelines based on what is in the DOM
	ParsonsWidget.prototype.getModifiedCode = function(search_string) {
		var codeLines = [];
		var that = this;
		$(search_string + " div").each(function(idx, i) {
			var domItem = $(i);
			var lineItem = that.getBlockById(domItem[0].id);
			codeLines.push(lineItem);	
		});
		return codeLines;
	};

	// Return array of codelines based on what is in the answer field
	ParsonsWidget.prototype.answerLines = function() {
		var answerLines = [];
		var that = this;
		$("#area-" + this.options.answerId + " div").each(function(idx, i) {
			var block = that.getBlockById($(i)[0].id);
			for (var i = 0; i < block.lines.length; i++) {
				answerLines.push(block.lines[i]);
			}
		});
		return answerLines;
	};
	
	// Return array of codelines based on what is in the solution
	ParsonsWidget.prototype.solutionLines = function() {
		var solutionLines = [];
		for (var i = 0; i < this.solution.length; i++) {
			var lines = this.solution[i].lines;
			for (var j = 0; j < lines.length; j++) {
				solutionLines.push(lines[j]);
			}
		}
		return solutionLines;
	};

	// Return a list of IDs corresponding to the hash
	ParsonsWidget.prototype.hashToIDList = function(hash) {
		var h;
		if (hash === "-" || hash === "" || hash === null) {
			h = [];
		} else {
			h = hash.split("-");
		}
		var ids = [], lineValues, index;
		for (var i = 0; i < h.length; i++) {
			lineValues = h[i].split("_");
			index = lineValues[0];
			if (index < this.lines.length) {
				ids.push(this.lines[index].id);
			}
		}
		return ids;
	};

	// Update the indents based on the hash
	ParsonsWidget.prototype.updateIndentsFromHash = function(hash) {
		var h;
		if (hash === "-" || hash === "" || hash === null) {
			h = [];
		} else {
			h = hash.split("-");
		}
		var ids = [], lineValues, index;
		// Update the view
		for (var i = 0; i < h.length; i++) {
			lineValues = h[i].split("_");
			index = lineValues[0];
			if (index < this.lines.length) {
				this.lines[index].viewIndent = Number(lineValues[1]);
			}
		}
		// Update the view
		this.state = undefined;
		this.updateView();
	};

	// Grade the answer compared to the solution
	ParsonsWidget.prototype.getFeedback = function() {
		var grade = this.grader.grade();
		this.feedback_exists = true;
		grade.type = "feedback";
		this.addLogEntry(grade);
	};
	
	// Clear any feedback from the answer area
	ParsonsWidget.prototype.clearFeedback = function() {
		if (this.feedback_exists) {
			$("#area-" + this.options.answerId).removeClass("incorrect correct");
			var blocks = $("#area-" + this.options.answerId + " div");
			$.each(this.FEEDBACK_STYLES, function(index, value) {
				blocks.removeClass(value);
			});
		}
		this.feedback_exists = false;
	};
	
	// A function for returning a shuffled version of an array
	ParsonsWidget.prototype.shuffled = function(array) {
		var currentIndex = array.length;
		var returnArray = array.slice();
		var temporaryValue, randomIndex;
		// While there remain elements to shuffle...
		while (0 !== currentIndex) {
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
			// And swap it with the current element.
			temporaryValue = returnArray[currentIndex];
			returnArray[currentIndex] = returnArray[randomIndex];
			returnArray[randomIndex] = temporaryValue;
		}
		return returnArray;
	};

	// Update the HTML based on hashes
	ParsonsWidget.prototype.createHTMLFromHashes = function(answerHash, sourceHash) {
		var answer = this.hashToIDList(answerHash);
		var source = this.hashToIDList(sourceHash);
		this.createHTMLFromLists(answer, source);
		if (!this.options.noindent) {
			this.updateIndentsFromHash(answerHash);
		}
	};
	
	// Based on the movingId, etc., establish the moving state
	//   rest = not moving
	//   source = moving inside source area
	//   answer = moving inside answer area
	//   moving = moving outside areas
	ParsonsWidget.prototype.movingState = function() {
		if (this.movingId == undefined) {
			return "rest";
		}
		var moving = $("#" + this.movingId);
		var x = this.movingX;
		var y = this.movingY;
		// Check if in answer area
		var left = this.answerArea.offset().left;
		var right = left + this.answerArea.outerWidth();
		var top = this.answerArea.offset().top;
		var bottom = top + this.answerArea.outerHeight();
		if (x >= left && (x <= right) && (y >= top) && (y <= bottom)) {
			return "answer";
		}
		// Check if in source area
		left = this.sourceArea.offset().left;
		right = left + this.sourceArea.outerWidth();
		top = this.sourceArea.offset().top;
		bottom = top + this.sourceArea.outerHeight();
		if (x >= left && (x <= right) && (y >= top) && (y <= bottom)) {
			return "source";
		}
		return "moving";
	}
	
	// Update the ParsonsWidget view
	// This occurs when dragging the moving tile
	ParsonsWidget.prototype.updateView = function() {
		// Based on the new and the old state, figure out what to update
		var state = this.state;
		var newState = this.movingState();
		var updateSource = true;
		var updateAnswer = true;
		var updateMoving = newState == "moving";
		if (state == newState) {
			if (newState == "rest") {
				updateSource = false;
				updateAnswer = false;
			} else if (newState == "source") {
				updateAnswer = false;
			} else if (newState == "answer") {
				updateSource = false;
			} else if (newState == "moving") {
				updateAnswer = false;
				updateSource = false;
			}
		}
		var moving = undefined;
		var movingHeight;
		if (this.movingId !== undefined) {
			moving = $("#" + this.movingId);
			// Must get height here as detached items don't have height
			movingHeight = moving.outerHeight(true);
			moving.detach();
		}
		
		var positionTop, width;
		var that = this;
		var baseWidth = this.sourceArea.width() - 22;
		
		// Update the Source Area
		if (updateSource) {
			positionTop = 0;
			if (newState == "source") {
				var hasInserted = false;
				var x = this.movingX - this.sourceArea.offset().left - baseWidth / 2 - 11;
				var y = this.movingY - this.sourceArea.offset().top;
				$("#area-" + this.options.sourceId + " div").each(function(idx, i) {
					item = $(i);
					if (item[0].id !== "") {
						if (!hasInserted) {
							if (y - positionTop < (movingHeight + item.outerHeight(true)) / 2) {
								hasInserted = true;
								moving.insertBefore("#" + item[0].id);
								moving.css({
									'left' : x,
									'top' : y - movingHeight / 2,
									'width' : baseWidth,
									'z-index' : 2
								});
								positionTop = positionTop + movingHeight;
							}
						}
						item.css({
							'left' : 0,
							'top' : positionTop,
							'width' : baseWidth,
							'z-index' : 1
						});
						positionTop = positionTop + item.outerHeight(true);
					}
				});
				if (!hasInserted) {
					moving.appendTo("#area-" + this.options.sourceId);
					moving.css({
						'left' : x,
						'top' : y - moving.outerHeight(true) / 2,
						'width' : baseWidth,
						'z-index' : 2
					});
				}
			} else {
				$("#area-" + this.options.sourceId + " div").each(function(idx, i) {
					item = $(i);
					if (item[0].id !== "") {
						item.css({
							'left' : 0,
							'top' : positionTop,
							'width' : baseWidth,
							'z-index' : 1
						});
						positionTop = positionTop + item.outerHeight(true);
					}
				});
			}
		}
		
		// Update the Answer Area
		if (updateAnswer) {
			var block, indent;
			positionTop = 0;
			width = this.answerArea.width() - 22;
			var that = this;
			if (newState == "answer") {
				var hasInserted = false;
				var x = this.movingX - this.answerArea.offset().left - baseWidth / 2 - 11;
				movingIndent = Math.round(x / this.options.x_indent);
				if (movingIndent < 0) {
					movingIndent = 0;
				} else if (movingIndent > this.indent) {
					movingIndent = this.indent;
				} else {
					x = movingIndent * this.options.x_indent;
				}
				var y = this.movingY - this.answerArea.offset().top;
				block = this.getBlockById(this.movingId);
				block.viewIndent = movingIndent;
				$("#area-" + this.options.answerId + " div").each(function(idx, i) {
					item = $(i);
					if (item[0].id !== "") {
						if (!hasInserted) {
							if (y - positionTop < (movingHeight + item.outerHeight(true)) / 2) {
								hasInserted = true;
								moving.insertBefore("#" + item[0].id);
								moving.css({
									'left' : x,
									'top' : y - movingHeight / 2,
									'width' : baseWidth,
									'z-index' : 2
								});
								positionTop = positionTop + movingHeight;
							}
						}
						block = that.getBlockById(item[0].id);
						indent = block.viewIndent * that.options.x_indent;
						item.css({
							'left' : indent,
							'top' : positionTop,
							'width' : width - indent,
							'z-index' : 1
						});
						positionTop = positionTop + item.outerHeight(true);
					}
				});
				if (!hasInserted) {				
					moving.appendTo("#area-" + this.options.answerId);
					moving.css({
						'left' : x,
						'top' : y - moving.outerHeight(true) / 2,
						'width' : baseWidth,
						'z-index' : 2
					});
				}
			} else {
				$("#area-" + this.options.answerId + " div").each(function(idx, i) {
					item = $(i);
					if (item[0].id !== "") {
						block = that.getBlockById(item[0].id);
						indent = block.viewIndent * that.options.x_indent;
						item.css({
							'left' : indent,
							'top' : positionTop,
							'width' : width - indent,
							'z-index' : 1
						});
						positionTop = positionTop + item.outerHeight(true);
					}
				});
			}
		}

		// Update the Moving Area
		if (updateMoving) {
			moving.appendTo("#area-" + this.options.sourceId);
			width = this.sourceArea.width() - 22;
			moving.css({
				'left' : this.movingX - this.sourceArea.offset().left - (moving.outerWidth(true) / 2),
				'top' : this.movingY - this.sourceArea.offset().top - (movingHeight / 2),
				'width' : width,
				'z-index' : 2
			});
		}
		
		state = newState;
		this.state = state;
	};

	// Reset the view based on this.blocks accounting for
	//     * shorten to the distractors to maxdist size
	//     * if an order is specified, then use that
	//     * else shuffle the blocks randomly, accounting for paired distractors
	//     * call createView with the shuffled blocks in the source field
	ParsonsWidget.prototype.resetView = function() {
		var blocks = [], i, aBlock;
		for (i = 0; i < this.blocks.length; i++) {
			blocks.push(this.blocks[i]);
		}
		
		// Trim the distractors (if necessary)
		if (!this.options.maxdist == undefined) {
			var distractorIDs = [];
			for (i = 0; i < blocks.length; i++) {
				distractorIDs.push(blocks[i].id);
			}
			if (this.options.maxdist < distractorIDs.length) {
				distractorIDs = this.shuffled(distractorIDs);
				distractorIDs = distractorIDs.slice(0, this.options.maxdist - 1);
				var trimmed = [];
				for (i = 0; i < blocks.length; i++) {
					aBlock = blocks[i];
					if (aBlock.distractor) {
						if ($.inArray(aBlock.id, distractorIDs)) {
							trimmed.push(aBlock);
						}
					} else {
						trimmed.push(aBlock);
					}
				}
				blocks = trimmed;
			}
		}
		
		// Reorder the sourceBlock
		var sourceBlocks = [];
		if (this.options.order === undefined) {
			// Shuffle, respecting paired distractors
			var chunks = [], chunk = [];
			$.each(blocks, function(index, item) {
				if (item.paired) {
					chunk.push(item);
				} else {
					chunk = [];
					chunk.push(item);
					chunks.push(chunk);
				}
			});
			chunks = this.shuffled(chunks);
			for (var c = 0; c < chunks.length; c++) {
				chunk = chunks[c];
				if (chunk.length > 1) {
					// shuffle paired distractors
					chunk = this.shuffled(chunk);
					for (i = 0; i < chunk.length; i++) {
						sourceBlocks.push(chunk[i]);
					}
				} else {
					sourceBlocks.push(chunk[0]);
				}
			}
		} else {
			// Use the specified order to create the sourceBlocks
			// Note that any lines not specified in the order are deleted
			var order = this.options.order;
			for (i = 0; i < order.length; i++) {
				for (var j = 0; j < blocks.length; j++) {
					if (blocks[j].index === order[i]) {
						sourceBlocks.push(blocks[j]);
					}
				}
			}
		}
		this.createView(sourceBlocks, []);
	};

	// Based on the blocks, create the view and insert it into the DOM
	ParsonsWidget.prototype.createView = function(sourceBlocks, answerBlocks) {
		var html, i;
		if (this.options.sourceId) {
			// Add source area
			html = this.options.sourceLabel ? '<p>' + this.options.sourceLabel + '</p>' : '';
			html += '<div id="area-' + this.options.sourceId + '" class="source">'
			for (i = 0; i < sourceBlocks.length; i++) {
				html += sourceBlocks[i].asHTML();
			}
			html += '<\/div>';
			$("#" + this.options.sourceId).html(html);
			// Add answer area
			html = this.options.answerLabel ? '<p>' + this.options.answerLabel + '</p>' : '';
			html += '<div id="area-' + this.options.answerId + '">'			
			for (i = 0; i < answerBlocks.length; i++) {
				html += answerBlocks[i].asHTML();
			}
			html += '<\/div>';
			$("#" + this.options.answerId).html(html);
		} else {
			// Add only the answer area
			html = '';
			html += '<div id="area-' + this.options.answerId + '">'			
			for (i = 0; i < answerBlocks.length; i++) {
				html += answerBlocks[i].asHTML();
			}
			html += '<\/div>';
			$("#" + this.options.answerId).html(html);
		}
		
		if (window.prettyPrint && (typeof(this.options.prettyPrint) === "undefined" || this.options.prettyPrint)) {
			prettyPrint();
		}
		var answerArea = $("#area-" + this.options.answerId);
		var sourceArea = $("#area-" + this.options.sourceId);
		// Establish the width and height of the droppable areas
		var areaWidth = 0;
		var areaHeight = 6;
		var item;
		var maxFunction = function(idx, i) {
			item = $(i);
			areaHeight = areaHeight + item.outerHeight(true);
			areaWidth = Math.max(areaWidth, item.outerWidth(true));			
		};
		$("#area-" + this.options.answerId + " div").each(maxFunction);
		$("#area-" + this.options.sourceId + " div").each(maxFunction);
		// Determine how much indent should be possible in the answer area
		var indent;
		if (this.options.noindent) {
			indent = 0;
		} else {
			// Set the indent so that the solution is possible
			indent = 1;
			for (var i = 0; i < this.solution.length; i++) {
				indent = Math.max(indent, this.solution[i].indent);
			}
		}
		sourceArea.height(areaHeight);
		sourceArea.width(areaWidth);
		answerArea.height(areaHeight);
		answerArea.width(this.options.x_indent * indent + areaWidth);
		this.answerArea = answerArea;
		this.sourceArea = sourceArea;
		this.indent = indent;
		if (indent > 0 && indent <= 4) {
			answerArea.addClass("answer" + indent);
		} else {
			answerArea.addClass("answer");
		}
		var that = this;
		that.state = undefined; // needs to be here for loading from storage
		that.updateView();
		
		var draggableOptions = {
			helper : "clone",
			distance : 0,
			scope : that.options.answerId,
			drag : function(event, ui) {
				// Update the view
				that.movingX = event.pageX;
				that.movingY = event.pageY;
				that.updateView();
			},
			start : function(event, ui) {
				that.clearFeedback();
				// Move original; hide clone
				that.movingId = $(this)[0].id;
				$(ui.helper).hide();
				// Update the view
				that.movingX = event.pageX;
				that.movingY = event.pageY;
				that.updateView();
			},
			stop : function(event, ui) {
				// Restore functionality to original
				$("#" + that.movingId).draggable(draggableOptions);
				delete that.movingId;
				delete that.movingX;
				delete that.movingY;
				that.updateView();
			}
		};
		
		// Assign draggable options to the areas
		for (var i = 0; i < sourceBlocks.length; i++) {
			$("#" + sourceBlocks[i].id).draggable(draggableOptions);
		}
		for (var i = 0; i < answerBlocks.length; i++) {
			$("#" + answerBlocks[i].id).draggable(draggableOptions);
		}
		// Log what was created
		this.addLogEntry({
			"type" : 'init',
			"time" : new Date()
		});
	};
	
	window['ParsonsWidget'] = ParsonsWidget;
}
// allows _ and $ to be modified with noconflict without changing the globals
// that parsons uses
)($,_);
