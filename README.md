# Responsive-iFrame-API

### Introduction
This API is an adaptation of the SafeFrames initiative, allowing ads to be responsive while served inside an iFrame. There are two main parts of this process.. the pub-side file, and the ad-side code. The pub-side file lives on the publisher page and acts as a bridge to the ad-side code that posts messages and directions to be carried out.

### Requirements
1. The publisher must have the resp.lib.js file included on their page prior to the ad being served.
2. The creative must have the API class included in order to initialize and use the Responsive iFrame API.
3. The placements must define the variable “prPlacementId” to the placement id. This is imperative so that the API has a reference to which placement should be utilized, especially if there’s more than one PointRoll ad on the page. This is the id that is sent to the initialization function of the API.

### Known Limitations
1. The ad must be in an iFrame. The iFrame can be PointRoll or site generated.
2. If the iFrame is not PointRoll generated, the tag may not be altered to use the ads.pointroll call as the source. This will result in a double nested iFrames and the API will not work. 

### Library Definition
In order to communicate out to the publisher page, you must include the prAdConnection class within the creative. This serves as the bridge between the ad and the publisher page by sending and receiving calls.

### Initialization
Create an instance of the ad side library by setting a reference variable to the class. This accepts an optional boolean parameter that can be used to enable the debug mode which will show console logs in a browser’s web inspector. If no boolean is passed, it will default to false. The second parameter is a callback that will receive “success” or “failure” based on whether or not the connection is made.

```
var _pr_ad_connection = new prAdConnection(true, callback);
```

**createConnection** - function(*ad wrapper id, break points, id, ad slot index*)

