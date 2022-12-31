#!/bin/bash

# Check if the correct number of arguments were provided
if [ $# -lt 2 ]; then
  echo "Usage: $0 FOLDER_LIST SEARCH_PATH"
  exit 1
fi

# Read the list of folders to remove
folder_list=$1
shift

# Read the search path
search_path=$1
shift

# Iterate over the list of folders and remove them
while read -r folder; do
  # Check if the folder exists in the search path
  if [ -d "$search_path/$folder" ]; then
    # Remove the folder
    rm -r "$search_path/$folder"
  fi
done < "$folder_list"