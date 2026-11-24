#!/bin/bash

echo "testing before build"

# Check whether source files exist
if [ -f "package.json" ] && [ -d "noc" ]; then
    echo "Source files found."

else
    echo "ERROR: Source files not found."
    exit 1
fi