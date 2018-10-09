#!/bin/bash

antora --pull --clean site.yml --stacktrace
touch docs/.nojekyll
open docs/index.html