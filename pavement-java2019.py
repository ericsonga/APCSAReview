import paver
from paver.easy import *
import paver.setuputils
paver.setuputils.install_distutils_tasks()
from socket import gethostname
import os, sys
from os import environ

from sphinxcontrib import paverutils

sys.path.append(os.getcwd())

home_dir = os.getcwd()



master_url = None
if master_url is None:
    if 'RSHOST' in environ:
        master_url = environ['RSHOST']
    elif gethostname() in  ['web608.webfaction.com', 'rsbuilder']:
        master_url = 'http://interactivepython.org'
    elif gethostname() == 'runestone-deploy':
        master_url = 'https://runestone.academy'
    else:
        master_url = 'http://127.0.0.1:8000'

master_app = 'runestone'
serving_dir = "./build/java2019"
dest = '../../static'
project_name = "java2019"

options(
    sphinx = Bunch(docroot=".",),

    build = Bunch(
        builddir="./build/java2019",
        sourcedir="_sources",
        outdir="./build/java2019",
        confdir=".",
        project_name = "java2019",
        template_args={'course_id': 'java2019',
                       'login_required':'false',
                       'appname':master_app,
                       'loglevel': 10,
                       'course_url':master_url,
                       'use_services': 'true',
                       'python3': 'false',
                       'dburl': 'postgresql://runestone@localhost/runestone',
                       'basecourse': 'java2019'
                        }
    )
)

# Check to see if we are building on our Jenkins build server, if so use the environment variables
# to update the DB information for this build
if 'DBHOST' in environ and  'DBPASS' in environ and 'DBUSER' in environ and 'DBNAME' in environ:
    options.build.template_args['dburl'] = 'postgresql://{DBUSER}:{DBPASS}@{DBHOST}/{DBNAME}'.format(**environ)

from runestone import build  # build is called implicitly by the paver driver.