## Step 1 - Upload .CSV

Two methods for uploading a file, dropzone and button(only button on mobile).

Handler will split the code into rows and particular fields of rows.

I assumed the fields of .CSV file are going to be separated by commas, so I only handled that as a separator, as it is the most common.

I also assumed, there is only one separator, so I didn't work around syntaxes like:

`John;35,USA|CA&Los Angeles`

(Normally above cases would have to be handled properly, I ignored them and worked around assumptions just for the sake of the task)

You can only upload .CSV with <= 20 rows. So if you pass a bigger file, you'll have to split it yourself.

## Step 2 - Define order of the columns

Next you have to pick the order of the columns, simply by clicking on given buttons.

In thit part column names will be bonded with values.

## Step 3 - Try to get coordinates from address

After that, just before rendering the map, I display another component, that will try to fetch coordinates of every address, for purposes of displaying markers.

## Step 4 - Map rendering

Simply displaying the map with markers, I didn't manage to change colors of those markers, downloading basic marker and changing the color in Photoshop seemed like a bad idea, I also tried to put some custom icons there, but it didn't work, so I'd like to get some advice on that in feedback.

There is also a tiny information just under the map, that shows a number of addresses, that couldn't be connected to any precise location, so it gives you a tip, that there is something wrong with the provided data or with order of the columns.
