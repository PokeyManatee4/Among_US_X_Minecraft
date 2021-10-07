function postDataToWebhook(data){
  var webHookUrl="https://hooks.slack.com/services/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";
  
  //https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
  var oReq = new XMLHttpRequest();
  var myJSONStr = payload={
{
  "channel": "CBR2V3XEX",
  "attachments": [
      {
          "fallback": "Finger!",
          "color": "00ff00",
          "pretext": "Im A Bot That Does Finger!",
          "author_name": "Finger Bot",
          "author_link": "https://user-images.githubusercontent.com/64691261/136316752-6905100a-e976-497f-93b0-5949d78b1af0.png",
          "author_icon": "https://user-images.githubusercontent.com/64691261/136316752-6905100a-e976-497f-93b0-5949d78b1af0.png",
          "title": "Finger!",
          "text": "Finger!",
          "fields": [
              {
                  "title": "Priority",
                  "value": "High",
                  "short": false
              }
          ],
          "image_url": "https://user-images.githubusercontent.com/64691261/136316752-6905100a-e976-497f-93b0-5949d78b1af0.png",
          "thumb_url": "https://user-images.githubusercontent.com/64691261/136316752-6905100a-e976-497f-93b0-5949d78b1af0.png",
          "footer": "Finger!",
          "footer_icon": "https://user-images.githubusercontent.com/64691261/136316752-6905100a-e976-497f-93b0-5949d78b1af0.png",
          "ts": 123456789
      }
  ]
}
  
//register method called after data has been sent method is executed
  oReq.addEventListener("load", reqListener);
  oReq.open("POST", webHookUrl,true);
  oReq.setRequestHeader('Content-Type', 'application/json');
  oReq.send(JSON.stringify(myJSONStr));
}
//callback method after webhook is executed
function reqListener () {
  console.log(this.responseText);
}
