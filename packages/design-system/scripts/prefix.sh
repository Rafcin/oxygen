#!/bin/bash

# Check if the required arguments are provided
if [[ $# -ne 2 ]]; then
    echo "Usage: rename_interfaces.sh file_path prefix"
    exit 1
fi

# Get the file path and prefix from the command line arguments
file_path=$1
prefix=$2

# Find all interface names in the file
interfaces=$(grep -oP 'interface \K\w+' $file_path)

# Loop through the interface names
for interface in $interfaces; do
    # Find all occurrences of the interface name in the file and replace them with the prefixed version
    sed -i "s/$interface/$prefix$interface/g" $file_path
done

# Find all occurrences of "throw DLSError(" and replace them with "throw Error("
# We use Quicktypw which creates helpers, however we also have a type called Error that interferes with JS Error. So this is a fix when the renaming of the Error happens.
sed -i "s/throw $prefix\Error(/throw Error(/g" $file_path