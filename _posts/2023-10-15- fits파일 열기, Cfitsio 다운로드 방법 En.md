---
title: C - Open fits file in 'C', cfitsio
date: 2023-10-13 8:40:00 +09:00
categories: [about Unity]
tags:
  [
    Unity,
    유니티,
    C#,
    모르는 거,
    english,
  ]
---
 
People who don't know won't enter here... 

fits file is file extension of a file that organizes astronomical data!

1. https://heasarc.gsfc.nasa.gov/fitsio/ here Download 'Windows PC cfit-(Version) zip file' 


2. https://heasarc.gsfc.nasa.gov/FTP/software/fitsio/c/README.win follow this guide

 
3. Among the files produced by building, place the '.dll' file into the code folder (the folder where x64, ~~.vcxproj, and .c files are located).


4. https://ikcoo.tistory.com/123 Follow along. For the header folder, just use the address of the folder you unzipped earlier.


linked page in '4'  is a korean lagnuege... please use google translate! 
i will add englishe text and image... maybe...!! Sorry for only posting a link... 


Reference)

how to include it? -> #include "fitsio.h"

Code for testing purposes. Please change "C:\\Clibrary\\Resource\\kplr011853890-2010009091648_llc.fits" to your own path.
```c
#include <string.h>
#include <stdio.h>
#include "fitsio.h"

int main(int argc, char* argv[]) {
fitsfile* fptr;
char card[FLEN_CARD];
int status = 0, nkeys, ii;  /* MUST initialize status */

fits_open_file(&fptr, "C:\\Clibrary\\Resource\\kplr011853890-2010009091648_llc.fits", READONLY, &status);/* Change to your own .fits file path*/
fits_get_hdrspace(fptr, &nkeys, NULL, &status);

for (ii = 1; ii <= nkeys; ii++) {
fits_read_record(fptr, ii, card, &status); /* read keyword */
printf("%s\n", card);
}
printf("END\n\n");  /* terminate listing with END */
fits_close_file(fptr, &status);

if (status)          /* print any error messages */
fits_report_error(stderr, status);
return(status);
}
```