---
title: C - c에서 fits파일 열기, cfitsio
date: 2023-10-13 8:40:00 +09:00
categories: [about Unity]
tags:
  [
    C,
    한국어,
  ]
---
 
모르는 사람은 여기 안 들어올테지만, fits파일은 천체 데이터들을 엑셀마냥 정리해 둔 파일의 확장자다!

1. https://heasarc.gsfc.nasa.gov/fitsio/ 여기에서 'Windows PC cfit-(버전) zip file' 다운로드


2. https://heasarc.gsfc.nasa.gov/FTP/software/fitsio/c/README.win 이거 따라서 하기

 
3. 빌드해서 나온 파일들 중, dll파일을 코드 폴더에(x64, ~~.vcxproj, .c 파일들 있는 그 폴더) 갖다 넣기

 

4. https://ikcoo.tistory.com/123 따라하기, 저기서 header폴더는 아까 압축 풀었던 그 폴더 주소 쓰면 됨 드디어 나도 C에서 fits파일을 읽을 수 있어!!!


링크만 주구장창 달아놔서 좀 얌채같긴 하지만... 음음 미래의 내가 용서해줄테야


참고)

include 하는 방법은

#include "fitsio.h"

대충 시험용 코드, "C\\~~" 부분에 fits파일 주소 쓰면 대충 Simple로 시작하면서 뭐시기들 출력됨
```c
#include <string.h>
#include <stdio.h>
#include "fitsio.h"

int main(int argc, char* argv[]) {
fitsfile* fptr;
char card[FLEN_CARD];
int status = 0, nkeys, ii;  /* MUST initialize status */

fits_open_file(&fptr, "C:\\Clibrary\\Resource\\kplr011853890-2010009091648_llc.fits", READONLY, &status);
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