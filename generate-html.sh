#!/bin/bash

antora --pull --clean site.yml --stacktrace
open docs/index.html