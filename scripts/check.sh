#!/usr/bin/env bash                            

if [ -f notfound.html ]; then          # which flag means "is it a FILE?"
    echo "✅ notfound.html found"
    exit 0                          # success number
else
    echo "❌ index.html is missing"
    exit 1                        # failure number
fi