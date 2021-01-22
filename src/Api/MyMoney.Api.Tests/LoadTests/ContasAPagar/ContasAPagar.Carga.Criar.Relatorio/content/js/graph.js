/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 170.0, "minX": 0.0, "maxY": 1880.0, "series": [{"data": [[0.0, 170.0], [0.1, 173.0], [0.2, 178.0], [0.3, 185.0], [0.4, 187.0], [0.5, 187.0], [0.6, 188.0], [0.7, 189.0], [0.8, 190.0], [0.9, 190.0], [1.0, 191.0], [1.1, 191.0], [1.2, 192.0], [1.3, 192.0], [1.4, 192.0], [1.5, 193.0], [1.6, 193.0], [1.7, 194.0], [1.8, 194.0], [1.9, 194.0], [2.0, 195.0], [2.1, 195.0], [2.2, 195.0], [2.3, 196.0], [2.4, 196.0], [2.5, 196.0], [2.6, 196.0], [2.7, 197.0], [2.8, 197.0], [2.9, 197.0], [3.0, 197.0], [3.1, 197.0], [3.2, 198.0], [3.3, 198.0], [3.4, 198.0], [3.5, 198.0], [3.6, 199.0], [3.7, 199.0], [3.8, 199.0], [3.9, 200.0], [4.0, 200.0], [4.1, 200.0], [4.2, 200.0], [4.3, 201.0], [4.4, 201.0], [4.5, 201.0], [4.6, 201.0], [4.7, 202.0], [4.8, 202.0], [4.9, 202.0], [5.0, 202.0], [5.1, 203.0], [5.2, 203.0], [5.3, 203.0], [5.4, 204.0], [5.5, 204.0], [5.6, 204.0], [5.7, 204.0], [5.8, 205.0], [5.9, 205.0], [6.0, 205.0], [6.1, 205.0], [6.2, 205.0], [6.3, 205.0], [6.4, 206.0], [6.5, 206.0], [6.6, 206.0], [6.7, 206.0], [6.8, 206.0], [6.9, 207.0], [7.0, 207.0], [7.1, 207.0], [7.2, 207.0], [7.3, 207.0], [7.4, 208.0], [7.5, 208.0], [7.6, 208.0], [7.7, 208.0], [7.8, 208.0], [7.9, 209.0], [8.0, 209.0], [8.1, 209.0], [8.2, 210.0], [8.3, 210.0], [8.4, 210.0], [8.5, 210.0], [8.6, 210.0], [8.7, 211.0], [8.8, 211.0], [8.9, 211.0], [9.0, 211.0], [9.1, 211.0], [9.2, 212.0], [9.3, 212.0], [9.4, 212.0], [9.5, 212.0], [9.6, 212.0], [9.7, 212.0], [9.8, 213.0], [9.9, 213.0], [10.0, 213.0], [10.1, 213.0], [10.2, 213.0], [10.3, 214.0], [10.4, 214.0], [10.5, 214.0], [10.6, 215.0], [10.7, 215.0], [10.8, 215.0], [10.9, 215.0], [11.0, 215.0], [11.1, 216.0], [11.2, 216.0], [11.3, 216.0], [11.4, 216.0], [11.5, 216.0], [11.6, 216.0], [11.7, 217.0], [11.8, 217.0], [11.9, 217.0], [12.0, 217.0], [12.1, 217.0], [12.2, 217.0], [12.3, 218.0], [12.4, 218.0], [12.5, 218.0], [12.6, 218.0], [12.7, 218.0], [12.8, 219.0], [12.9, 219.0], [13.0, 219.0], [13.1, 219.0], [13.2, 219.0], [13.3, 220.0], [13.4, 220.0], [13.5, 220.0], [13.6, 221.0], [13.7, 221.0], [13.8, 221.0], [13.9, 221.0], [14.0, 222.0], [14.1, 222.0], [14.2, 222.0], [14.3, 222.0], [14.4, 223.0], [14.5, 223.0], [14.6, 223.0], [14.7, 223.0], [14.8, 223.0], [14.9, 224.0], [15.0, 224.0], [15.1, 224.0], [15.2, 224.0], [15.3, 225.0], [15.4, 225.0], [15.5, 225.0], [15.6, 225.0], [15.7, 226.0], [15.8, 226.0], [15.9, 226.0], [16.0, 226.0], [16.1, 227.0], [16.2, 227.0], [16.3, 227.0], [16.4, 228.0], [16.5, 228.0], [16.6, 228.0], [16.7, 228.0], [16.8, 229.0], [16.9, 229.0], [17.0, 229.0], [17.1, 230.0], [17.2, 230.0], [17.3, 230.0], [17.4, 231.0], [17.5, 231.0], [17.6, 232.0], [17.7, 232.0], [17.8, 232.0], [17.9, 233.0], [18.0, 233.0], [18.1, 233.0], [18.2, 234.0], [18.3, 234.0], [18.4, 235.0], [18.5, 235.0], [18.6, 236.0], [18.7, 236.0], [18.8, 236.0], [18.9, 237.0], [19.0, 237.0], [19.1, 238.0], [19.2, 238.0], [19.3, 239.0], [19.4, 239.0], [19.5, 239.0], [19.6, 240.0], [19.7, 240.0], [19.8, 241.0], [19.9, 241.0], [20.0, 241.0], [20.1, 242.0], [20.2, 242.0], [20.3, 242.0], [20.4, 243.0], [20.5, 243.0], [20.6, 243.0], [20.7, 243.0], [20.8, 244.0], [20.9, 244.0], [21.0, 245.0], [21.1, 245.0], [21.2, 246.0], [21.3, 246.0], [21.4, 246.0], [21.5, 247.0], [21.6, 247.0], [21.7, 247.0], [21.8, 248.0], [21.9, 248.0], [22.0, 249.0], [22.1, 249.0], [22.2, 250.0], [22.3, 250.0], [22.4, 250.0], [22.5, 250.0], [22.6, 250.0], [22.7, 251.0], [22.8, 251.0], [22.9, 251.0], [23.0, 251.0], [23.1, 251.0], [23.2, 252.0], [23.3, 252.0], [23.4, 252.0], [23.5, 252.0], [23.6, 252.0], [23.7, 253.0], [23.8, 253.0], [23.9, 253.0], [24.0, 253.0], [24.1, 253.0], [24.2, 254.0], [24.3, 254.0], [24.4, 254.0], [24.5, 254.0], [24.6, 254.0], [24.7, 254.0], [24.8, 255.0], [24.9, 255.0], [25.0, 255.0], [25.1, 255.0], [25.2, 255.0], [25.3, 255.0], [25.4, 256.0], [25.5, 256.0], [25.6, 256.0], [25.7, 256.0], [25.8, 257.0], [25.9, 257.0], [26.0, 257.0], [26.1, 257.0], [26.2, 257.0], [26.3, 257.0], [26.4, 258.0], [26.5, 258.0], [26.6, 258.0], [26.7, 258.0], [26.8, 258.0], [26.9, 258.0], [27.0, 259.0], [27.1, 259.0], [27.2, 259.0], [27.3, 259.0], [27.4, 259.0], [27.5, 259.0], [27.6, 260.0], [27.7, 260.0], [27.8, 260.0], [27.9, 260.0], [28.0, 260.0], [28.1, 260.0], [28.2, 261.0], [28.3, 261.0], [28.4, 261.0], [28.5, 261.0], [28.6, 261.0], [28.7, 261.0], [28.8, 261.0], [28.9, 261.0], [29.0, 261.0], [29.1, 261.0], [29.2, 262.0], [29.3, 262.0], [29.4, 262.0], [29.5, 262.0], [29.6, 262.0], [29.7, 262.0], [29.8, 263.0], [29.9, 263.0], [30.0, 263.0], [30.1, 263.0], [30.2, 263.0], [30.3, 263.0], [30.4, 263.0], [30.5, 264.0], [30.6, 264.0], [30.7, 264.0], [30.8, 264.0], [30.9, 264.0], [31.0, 264.0], [31.1, 265.0], [31.2, 265.0], [31.3, 265.0], [31.4, 265.0], [31.5, 265.0], [31.6, 265.0], [31.7, 265.0], [31.8, 266.0], [31.9, 266.0], [32.0, 266.0], [32.1, 266.0], [32.2, 266.0], [32.3, 266.0], [32.4, 266.0], [32.5, 267.0], [32.6, 267.0], [32.7, 267.0], [32.8, 267.0], [32.9, 267.0], [33.0, 267.0], [33.1, 267.0], [33.2, 268.0], [33.3, 268.0], [33.4, 268.0], [33.5, 268.0], [33.6, 268.0], [33.7, 268.0], [33.8, 268.0], [33.9, 268.0], [34.0, 268.0], [34.1, 269.0], [34.2, 269.0], [34.3, 269.0], [34.4, 269.0], [34.5, 269.0], [34.6, 269.0], [34.7, 269.0], [34.8, 269.0], [34.9, 269.0], [35.0, 270.0], [35.1, 270.0], [35.2, 270.0], [35.3, 270.0], [35.4, 270.0], [35.5, 270.0], [35.6, 270.0], [35.7, 270.0], [35.8, 270.0], [35.9, 270.0], [36.0, 271.0], [36.1, 271.0], [36.2, 271.0], [36.3, 271.0], [36.4, 271.0], [36.5, 271.0], [36.6, 271.0], [36.7, 271.0], [36.8, 271.0], [36.9, 271.0], [37.0, 271.0], [37.1, 271.0], [37.2, 272.0], [37.3, 272.0], [37.4, 272.0], [37.5, 272.0], [37.6, 272.0], [37.7, 272.0], [37.8, 272.0], [37.9, 272.0], [38.0, 272.0], [38.1, 272.0], [38.2, 272.0], [38.3, 272.0], [38.4, 273.0], [38.5, 273.0], [38.6, 273.0], [38.7, 273.0], [38.8, 273.0], [38.9, 273.0], [39.0, 273.0], [39.1, 273.0], [39.2, 273.0], [39.3, 273.0], [39.4, 273.0], [39.5, 273.0], [39.6, 274.0], [39.7, 274.0], [39.8, 274.0], [39.9, 274.0], [40.0, 274.0], [40.1, 274.0], [40.2, 274.0], [40.3, 274.0], [40.4, 274.0], [40.5, 274.0], [40.6, 274.0], [40.7, 274.0], [40.8, 275.0], [40.9, 275.0], [41.0, 275.0], [41.1, 275.0], [41.2, 275.0], [41.3, 275.0], [41.4, 275.0], [41.5, 275.0], [41.6, 275.0], [41.7, 275.0], [41.8, 275.0], [41.9, 275.0], [42.0, 275.0], [42.1, 276.0], [42.2, 276.0], [42.3, 276.0], [42.4, 276.0], [42.5, 276.0], [42.6, 276.0], [42.7, 276.0], [42.8, 276.0], [42.9, 276.0], [43.0, 276.0], [43.1, 276.0], [43.2, 276.0], [43.3, 276.0], [43.4, 277.0], [43.5, 277.0], [43.6, 277.0], [43.7, 277.0], [43.8, 277.0], [43.9, 277.0], [44.0, 277.0], [44.1, 277.0], [44.2, 277.0], [44.3, 277.0], [44.4, 277.0], [44.5, 278.0], [44.6, 278.0], [44.7, 278.0], [44.8, 278.0], [44.9, 278.0], [45.0, 278.0], [45.1, 278.0], [45.2, 278.0], [45.3, 278.0], [45.4, 278.0], [45.5, 278.0], [45.6, 278.0], [45.7, 279.0], [45.8, 279.0], [45.9, 279.0], [46.0, 279.0], [46.1, 279.0], [46.2, 279.0], [46.3, 279.0], [46.4, 279.0], [46.5, 279.0], [46.6, 279.0], [46.7, 279.0], [46.8, 279.0], [46.9, 279.0], [47.0, 280.0], [47.1, 280.0], [47.2, 280.0], [47.3, 280.0], [47.4, 280.0], [47.5, 280.0], [47.6, 280.0], [47.7, 280.0], [47.8, 280.0], [47.9, 280.0], [48.0, 280.0], [48.1, 280.0], [48.2, 280.0], [48.3, 280.0], [48.4, 280.0], [48.5, 280.0], [48.6, 280.0], [48.7, 281.0], [48.8, 281.0], [48.9, 281.0], [49.0, 281.0], [49.1, 281.0], [49.2, 281.0], [49.3, 281.0], [49.4, 281.0], [49.5, 281.0], [49.6, 281.0], [49.7, 281.0], [49.8, 281.0], [49.9, 281.0], [50.0, 282.0], [50.1, 282.0], [50.2, 282.0], [50.3, 282.0], [50.4, 282.0], [50.5, 282.0], [50.6, 282.0], [50.7, 282.0], [50.8, 282.0], [50.9, 282.0], [51.0, 282.0], [51.1, 282.0], [51.2, 282.0], [51.3, 283.0], [51.4, 283.0], [51.5, 283.0], [51.6, 283.0], [51.7, 283.0], [51.8, 283.0], [51.9, 283.0], [52.0, 283.0], [52.1, 283.0], [52.2, 283.0], [52.3, 283.0], [52.4, 283.0], [52.5, 284.0], [52.6, 284.0], [52.7, 284.0], [52.8, 284.0], [52.9, 284.0], [53.0, 284.0], [53.1, 284.0], [53.2, 284.0], [53.3, 284.0], [53.4, 284.0], [53.5, 284.0], [53.6, 284.0], [53.7, 285.0], [53.8, 285.0], [53.9, 285.0], [54.0, 285.0], [54.1, 285.0], [54.2, 285.0], [54.3, 285.0], [54.4, 285.0], [54.5, 285.0], [54.6, 285.0], [54.7, 285.0], [54.8, 285.0], [54.9, 285.0], [55.0, 285.0], [55.1, 286.0], [55.2, 286.0], [55.3, 286.0], [55.4, 286.0], [55.5, 286.0], [55.6, 286.0], [55.7, 286.0], [55.8, 286.0], [55.9, 286.0], [56.0, 286.0], [56.1, 286.0], [56.2, 286.0], [56.3, 286.0], [56.4, 287.0], [56.5, 287.0], [56.6, 287.0], [56.7, 287.0], [56.8, 287.0], [56.9, 287.0], [57.0, 287.0], [57.1, 287.0], [57.2, 287.0], [57.3, 287.0], [57.4, 287.0], [57.5, 287.0], [57.6, 287.0], [57.7, 288.0], [57.8, 288.0], [57.9, 288.0], [58.0, 288.0], [58.1, 288.0], [58.2, 288.0], [58.3, 288.0], [58.4, 288.0], [58.5, 288.0], [58.6, 288.0], [58.7, 288.0], [58.8, 288.0], [58.9, 288.0], [59.0, 288.0], [59.1, 289.0], [59.2, 289.0], [59.3, 289.0], [59.4, 289.0], [59.5, 289.0], [59.6, 289.0], [59.7, 289.0], [59.8, 289.0], [59.9, 289.0], [60.0, 289.0], [60.1, 289.0], [60.2, 290.0], [60.3, 290.0], [60.4, 290.0], [60.5, 290.0], [60.6, 290.0], [60.7, 290.0], [60.8, 290.0], [60.9, 290.0], [61.0, 290.0], [61.1, 291.0], [61.2, 291.0], [61.3, 291.0], [61.4, 291.0], [61.5, 291.0], [61.6, 291.0], [61.7, 291.0], [61.8, 291.0], [61.9, 292.0], [62.0, 292.0], [62.1, 292.0], [62.2, 292.0], [62.3, 292.0], [62.4, 292.0], [62.5, 292.0], [62.6, 293.0], [62.7, 293.0], [62.8, 293.0], [62.9, 293.0], [63.0, 293.0], [63.1, 293.0], [63.2, 294.0], [63.3, 294.0], [63.4, 294.0], [63.5, 294.0], [63.6, 294.0], [63.7, 294.0], [63.8, 294.0], [63.9, 295.0], [64.0, 295.0], [64.1, 295.0], [64.2, 295.0], [64.3, 295.0], [64.4, 295.0], [64.5, 295.0], [64.6, 296.0], [64.7, 296.0], [64.8, 296.0], [64.9, 296.0], [65.0, 296.0], [65.1, 296.0], [65.2, 296.0], [65.3, 297.0], [65.4, 297.0], [65.5, 297.0], [65.6, 297.0], [65.7, 297.0], [65.8, 297.0], [65.9, 297.0], [66.0, 298.0], [66.1, 298.0], [66.2, 298.0], [66.3, 298.0], [66.4, 298.0], [66.5, 298.0], [66.6, 298.0], [66.7, 299.0], [66.8, 299.0], [66.9, 299.0], [67.0, 299.0], [67.1, 299.0], [67.2, 299.0], [67.3, 300.0], [67.4, 300.0], [67.5, 300.0], [67.6, 300.0], [67.7, 301.0], [67.8, 301.0], [67.9, 301.0], [68.0, 301.0], [68.1, 301.0], [68.2, 301.0], [68.3, 302.0], [68.4, 302.0], [68.5, 302.0], [68.6, 302.0], [68.7, 302.0], [68.8, 302.0], [68.9, 302.0], [69.0, 303.0], [69.1, 303.0], [69.2, 303.0], [69.3, 303.0], [69.4, 303.0], [69.5, 303.0], [69.6, 304.0], [69.7, 304.0], [69.8, 304.0], [69.9, 304.0], [70.0, 304.0], [70.1, 304.0], [70.2, 305.0], [70.3, 305.0], [70.4, 305.0], [70.5, 305.0], [70.6, 305.0], [70.7, 305.0], [70.8, 306.0], [70.9, 306.0], [71.0, 306.0], [71.1, 306.0], [71.2, 306.0], [71.3, 307.0], [71.4, 307.0], [71.5, 307.0], [71.6, 307.0], [71.7, 308.0], [71.8, 308.0], [71.9, 308.0], [72.0, 308.0], [72.1, 308.0], [72.2, 309.0], [72.3, 309.0], [72.4, 309.0], [72.5, 309.0], [72.6, 309.0], [72.7, 309.0], [72.8, 310.0], [72.9, 310.0], [73.0, 310.0], [73.1, 310.0], [73.2, 310.0], [73.3, 310.0], [73.4, 311.0], [73.5, 311.0], [73.6, 311.0], [73.7, 311.0], [73.8, 311.0], [73.9, 312.0], [74.0, 312.0], [74.1, 312.0], [74.2, 312.0], [74.3, 312.0], [74.4, 312.0], [74.5, 313.0], [74.6, 313.0], [74.7, 313.0], [74.8, 313.0], [74.9, 313.0], [75.0, 314.0], [75.1, 314.0], [75.2, 314.0], [75.3, 314.0], [75.4, 314.0], [75.5, 315.0], [75.6, 315.0], [75.7, 315.0], [75.8, 316.0], [75.9, 316.0], [76.0, 316.0], [76.1, 316.0], [76.2, 317.0], [76.3, 317.0], [76.4, 317.0], [76.5, 317.0], [76.6, 318.0], [76.7, 318.0], [76.8, 318.0], [76.9, 319.0], [77.0, 319.0], [77.1, 319.0], [77.2, 320.0], [77.3, 320.0], [77.4, 320.0], [77.5, 320.0], [77.6, 321.0], [77.7, 321.0], [77.8, 321.0], [77.9, 321.0], [78.0, 322.0], [78.1, 322.0], [78.2, 322.0], [78.3, 322.0], [78.4, 323.0], [78.5, 323.0], [78.6, 323.0], [78.7, 324.0], [78.8, 324.0], [78.9, 324.0], [79.0, 325.0], [79.1, 325.0], [79.2, 325.0], [79.3, 326.0], [79.4, 326.0], [79.5, 326.0], [79.6, 326.0], [79.7, 327.0], [79.8, 327.0], [79.9, 328.0], [80.0, 328.0], [80.1, 328.0], [80.2, 328.0], [80.3, 329.0], [80.4, 330.0], [80.5, 330.0], [80.6, 330.0], [80.7, 331.0], [80.8, 331.0], [80.9, 331.0], [81.0, 332.0], [81.1, 332.0], [81.2, 332.0], [81.3, 333.0], [81.4, 333.0], [81.5, 334.0], [81.6, 334.0], [81.7, 334.0], [81.8, 335.0], [81.9, 335.0], [82.0, 336.0], [82.1, 336.0], [82.2, 336.0], [82.3, 337.0], [82.4, 337.0], [82.5, 338.0], [82.6, 338.0], [82.7, 338.0], [82.8, 339.0], [82.9, 340.0], [83.0, 340.0], [83.1, 341.0], [83.2, 341.0], [83.3, 342.0], [83.4, 342.0], [83.5, 343.0], [83.6, 343.0], [83.7, 343.0], [83.8, 343.0], [83.9, 344.0], [84.0, 344.0], [84.1, 345.0], [84.2, 345.0], [84.3, 345.0], [84.4, 346.0], [84.5, 347.0], [84.6, 348.0], [84.7, 349.0], [84.8, 349.0], [84.9, 350.0], [85.0, 351.0], [85.1, 351.0], [85.2, 352.0], [85.3, 353.0], [85.4, 353.0], [85.5, 354.0], [85.6, 354.0], [85.7, 355.0], [85.8, 355.0], [85.9, 356.0], [86.0, 356.0], [86.1, 357.0], [86.2, 358.0], [86.3, 358.0], [86.4, 359.0], [86.5, 360.0], [86.6, 360.0], [86.7, 361.0], [86.8, 362.0], [86.9, 362.0], [87.0, 363.0], [87.1, 363.0], [87.2, 363.0], [87.3, 364.0], [87.4, 364.0], [87.5, 365.0], [87.6, 365.0], [87.7, 366.0], [87.8, 366.0], [87.9, 367.0], [88.0, 368.0], [88.1, 368.0], [88.2, 369.0], [88.3, 370.0], [88.4, 370.0], [88.5, 371.0], [88.6, 371.0], [88.7, 372.0], [88.8, 373.0], [88.9, 374.0], [89.0, 374.0], [89.1, 375.0], [89.2, 376.0], [89.3, 377.0], [89.4, 378.0], [89.5, 379.0], [89.6, 380.0], [89.7, 381.0], [89.8, 382.0], [89.9, 383.0], [90.0, 384.0], [90.1, 385.0], [90.2, 386.0], [90.3, 388.0], [90.4, 388.0], [90.5, 389.0], [90.6, 390.0], [90.7, 391.0], [90.8, 392.0], [90.9, 393.0], [91.0, 394.0], [91.1, 395.0], [91.2, 397.0], [91.3, 398.0], [91.4, 400.0], [91.5, 401.0], [91.6, 402.0], [91.7, 403.0], [91.8, 406.0], [91.9, 408.0], [92.0, 409.0], [92.1, 414.0], [92.2, 416.0], [92.3, 420.0], [92.4, 426.0], [92.5, 430.0], [92.6, 436.0], [92.7, 438.0], [92.8, 442.0], [92.9, 446.0], [93.0, 452.0], [93.1, 454.0], [93.2, 456.0], [93.3, 458.0], [93.4, 459.0], [93.5, 460.0], [93.6, 461.0], [93.7, 462.0], [93.8, 463.0], [93.9, 466.0], [94.0, 472.0], [94.1, 479.0], [94.2, 483.0], [94.3, 485.0], [94.4, 489.0], [94.5, 492.0], [94.6, 497.0], [94.7, 500.0], [94.8, 502.0], [94.9, 505.0], [95.0, 507.0], [95.1, 508.0], [95.2, 511.0], [95.3, 514.0], [95.4, 517.0], [95.5, 520.0], [95.6, 524.0], [95.7, 526.0], [95.8, 528.0], [95.9, 531.0], [96.0, 534.0], [96.1, 537.0], [96.2, 541.0], [96.3, 544.0], [96.4, 549.0], [96.5, 554.0], [96.6, 563.0], [96.7, 571.0], [96.8, 581.0], [96.9, 598.0], [97.0, 604.0], [97.1, 607.0], [97.2, 610.0], [97.3, 612.0], [97.4, 617.0], [97.5, 631.0], [97.6, 644.0], [97.7, 648.0], [97.8, 651.0], [97.9, 654.0], [98.0, 656.0], [98.1, 661.0], [98.2, 694.0], [98.3, 699.0], [98.4, 710.0], [98.5, 722.0], [98.6, 736.0], [98.7, 741.0], [98.8, 753.0], [98.9, 794.0], [99.0, 803.0], [99.1, 810.0], [99.2, 905.0], [99.3, 912.0], [99.4, 938.0], [99.5, 1606.0], [99.6, 1660.0], [99.7, 1707.0], [99.8, 1753.0], [99.9, 1805.0]], "isOverall": false, "label": "Criar Conta a Pagar", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 22.0, "minX": 100.0, "maxY": 12395.0, "series": [{"data": [[300.0, 4730.0], [600.0, 272.0], [700.0, 118.0], [1600.0, 38.0], [200.0, 12395.0], [100.0, 756.0], [400.0, 644.0], [800.0, 55.0], [1700.0, 40.0], [1800.0, 22.0], [900.0, 57.0], [500.0, 440.0]], "isOverall": false, "label": "Criar Conta a Pagar", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1800.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 100.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 18532.0, "series": [{"data": [[0.0, 18532.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 935.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 100.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 99.23496062992126, "minX": 1.60929348E12, "maxY": 100.0, "series": [{"data": [[1.60929348E12, 100.0], [1.60929354E12, 99.23496062992126]], "isOverall": false, "label": "Number of Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60929354E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 257.6666666666667, "minX": 3.0, "maxY": 353.0, "series": [{"data": [[33.0, 342.3333333333333], [36.0, 342.0], [39.0, 342.3333333333333], [41.0, 335.5], [43.0, 332.0], [46.0, 257.6666666666667], [49.0, 261.3333333333333], [3.0, 349.3333333333333], [52.0, 266.0], [55.0, 266.0], [58.0, 266.6666666666667], [61.0, 268.3333333333333], [67.0, 269.0], [64.0, 268.6666666666667], [70.0, 269.3333333333333], [73.0, 267.0], [79.0, 267.6666666666667], [76.0, 267.0], [82.0, 266.3333333333333], [85.0, 265.3333333333333], [91.0, 263.6666666666667], [88.0, 263.6666666666667], [94.0, 263.6666666666667], [99.0, 264.0], [96.0, 263.6666666666667], [6.0, 353.0], [100.0, 306.8574510710432], [9.0, 351.3333333333333], [12.0, 351.0], [15.0, 346.6666666666667], [18.0, 345.0], [21.0, 344.0], [24.0, 343.3333333333333], [27.0, 342.6666666666667], [30.0, 343.3333333333333]], "isOverall": false, "label": "Criar Conta a Pagar", "isController": false}, {"data": [[99.75172484284762, 306.82030970511585]], "isOverall": false, "label": "Criar Conta a Pagar-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 0.0, "minX": 1.60929348E12, "maxY": 88332.11666666667, "series": [{"data": [[1.60929348E12, 88332.11666666667], [1.60929354E12, 42438.86666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60929348E12, 0.0], [1.60929354E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60929354E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 295.0503896496935, "minX": 1.60929348E12, "maxY": 331.31842519685046, "series": [{"data": [[1.60929348E12, 295.0503896496935], [1.60929354E12, 331.31842519685046]], "isOverall": false, "label": "Criar Conta a Pagar", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60929354E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 290.8769009608826, "minX": 1.60929348E12, "maxY": 326.2688188976372, "series": [{"data": [[1.60929348E12, 290.8769009608826], [1.60929354E12, 326.2688188976372]], "isOverall": false, "label": "Criar Conta a Pagar", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60929354E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.60929348E12, "maxY": 4.9E-324, "series": [{"data": [[1.60929348E12, 0.0], [1.60929354E12, 0.0]], "isOverall": false, "label": "Criar Conta a Pagar", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60929354E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 170.0, "minX": 1.60929348E12, "maxY": 1880.0, "series": [{"data": [[1.60929348E12, 1880.0], [1.60929354E12, 966.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60929348E12, 365.0], [1.60929354E12, 399.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60929348E12, 739.0], [1.60929354E12, 850.4499999999989]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60929348E12, 486.09999999999854], [1.60929354E12, 536.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60929348E12, 170.0], [1.60929354E12, 252.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60929348E12, 272.0], [1.60929354E12, 294.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60929354E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 201.0, "minX": 36.0, "maxY": 877.0, "series": [{"data": [[36.0, 344.0], [113.0, 877.0], [165.0, 696.0], [205.0, 463.0], [214.0, 284.0], [215.0, 228.0], [224.0, 401.0], [247.0, 373.0], [244.0, 328.0], [250.0, 354.0], [299.0, 258.0], [301.0, 287.0], [290.0, 334.5], [288.0, 284.0], [315.0, 314.0], [308.0, 354.0], [317.0, 313.0], [319.0, 310.0], [332.0, 311.0], [323.0, 270.0], [328.0, 293.0], [330.0, 291.0], [321.0, 303.0], [327.0, 283.0], [326.0, 280.0], [320.0, 312.0], [329.0, 293.0], [348.0, 282.0], [347.0, 296.5], [338.0, 221.0], [341.0, 285.0], [344.0, 270.0], [351.0, 283.0], [339.0, 303.0], [342.0, 289.0], [343.0, 270.0], [360.0, 277.0], [352.0, 281.0], [365.0, 270.0], [364.0, 275.0], [354.0, 286.0], [373.0, 215.0], [371.0, 269.0], [395.0, 213.0], [390.0, 259.5], [413.0, 214.0], [402.0, 250.0], [429.0, 214.0], [432.0, 217.0], [435.0, 223.0], [434.0, 220.0], [464.0, 217.0], [484.0, 201.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 484.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 198.0, "minX": 36.0, "maxY": 856.0, "series": [{"data": [[36.0, 339.5], [113.0, 856.0], [165.0, 691.0], [205.0, 463.0], [214.0, 281.0], [215.0, 224.0], [224.0, 393.5], [247.0, 368.0], [244.0, 323.0], [250.0, 349.0], [299.0, 253.0], [301.0, 282.0], [290.0, 329.5], [288.0, 279.0], [315.0, 308.0], [308.0, 350.0], [317.0, 307.0], [319.0, 306.0], [332.0, 306.0], [323.0, 266.0], [328.0, 288.5], [330.0, 286.0], [321.0, 299.0], [327.0, 278.0], [326.0, 275.0], [320.0, 307.0], [329.0, 288.0], [348.0, 278.0], [347.0, 292.5], [338.0, 218.0], [341.0, 281.0], [344.0, 266.0], [351.0, 278.0], [339.0, 298.0], [342.0, 284.0], [343.0, 266.0], [360.0, 273.0], [352.0, 277.0], [365.0, 265.0], [364.0, 270.0], [354.0, 281.0], [373.0, 212.0], [371.0, 264.0], [395.0, 209.0], [390.0, 255.0], [413.0, 210.0], [402.0, 246.0], [429.0, 210.0], [432.0, 214.0], [435.0, 219.0], [434.0, 216.0], [464.0, 214.0], [484.0, 198.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 484.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 104.21666666666667, "minX": 1.60929348E12, "maxY": 221.9, "series": [{"data": [[1.60929348E12, 221.9], [1.60929354E12, 104.21666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60929354E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 105.83333333333333, "minX": 1.60929348E12, "maxY": 220.28333333333333, "series": [{"data": [[1.60929348E12, 220.28333333333333], [1.60929354E12, 105.83333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60929354E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 105.83333333333333, "minX": 1.60929348E12, "maxY": 220.28333333333333, "series": [{"data": [[1.60929348E12, 220.28333333333333], [1.60929354E12, 105.83333333333333]], "isOverall": false, "label": "Criar Conta a Pagar-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60929354E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 105.83333333333333, "minX": 1.60929348E12, "maxY": 220.28333333333333, "series": [{"data": [[1.60929348E12, 220.28333333333333], [1.60929354E12, 105.83333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60929354E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

