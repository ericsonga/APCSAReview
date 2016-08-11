import paver
from paver.easy import *
from socket import gethostname
import os, sys
from os import environ



master_url = None
if master_url is None:
    if gethostname() in  ['web407.webfaction.com', 'rsbuilder']:
        master_url = 'http://interactivepython.org'
    else:
        master_url = 'http://127.0.0.1:8000'

master_app = 'runestone'
serving_dir = "./build/JavaReview"
dest = '../../static'

options(
    sphinx = Bunch(docroot=".",),

    build = Bunch(
        builddir="./build/JavaReview",
        sourcedir="_sources",
        outdir="./build/JavaReview",
        confdir=".",
        project_name = "JavaReview",
        template_args={'course_id': 'JavaReview',
                       'login_required':'false',
                       'appname':master_app,
                       'loglevel': 10,
                       'course_url':master_url,
                       'use_services': 'true',
                       'python3': 'false',
                       'dburl': 'postgresql://runestone@localhost/runestone',
                       'basecourse': 'javareview'
                        }
    )
)

# Check to see if we are building on our Jenkins build server, if so use the environment variables
# to update the DB information for this build
if 'DBHOST' in environ and  'DBPASS' in environ and 'DBUSER' in environ and 'DBNAME' in environ:
    options.build.template_args['dburl'] = 'postgresql://{DBUSER}:{DBPASS}@{DBHOST}/{DBNAME}'.format(**environ)

from runestone import build  # build is called implicitly by the paver driver.
