# AngularBundleSize

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.2.

// case1 - ngClass:1_className

// case2 - class.:1_className

// case3 - ngClass:5_classNames

// case4 - class.:5_classNames

// case5 - ngClass:10_classNames_x_2000

// case6 - class.:10_classNames_x_2000


Prod bundle size | size 1/3/5 | size 2/4/6 | Diff 
---|------------|------------|--- 
case1 vs case2 | 158110     | 158051     | -59
case3 vs case4 | 158483     | 158117     | -366
case5 vs case6 | 164574     | 164357     | -217
  


`npm run start-prod` scripting time performance tab

Attempt | #1  | #2  | #3  | #4  | #5  | Average | Diff
--- |-----|-----|-----|-----|-----|---------|---
case5, ms | 242 | 237 | 231 | 236 | 234 | 236     | 0
case6, ms | 185 | 186 | 185 | 176 | 180 | 183     | -53
