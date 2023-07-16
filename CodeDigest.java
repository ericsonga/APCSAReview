import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.security.NoSuchAlgorithmException;
import java.util.stream.Collectors;

public class CodeDigest {

    public static void main(String[] args) throws NoSuchAlgorithmException, IOException {
        String code = args[0].equals("-") ? getStdin() : Files.readString(Paths.get(args[0]));
        System.out.println(CodeTestHelper.codeDigest(code));
    }

    private static String getStdin() throws IOException {
        return new BufferedReader(new InputStreamReader(System.in))
                .lines()
                .collect(Collectors.joining("\n"));
    }
}
