var userlist = ["freecodecamp", "Minecraft", "imaqtpie", "habathcx", "sodapoppin", "thomasballinger", "noobs2ninjas", "ESL_SC2"];
var baselink = "https://api.twitch.tv/kraken/streams/";
var openlink = "https://www.twitch.tv/";
for (var i = 0; i < userlist.length; i++) {
  username = userlist[i];
  var link = baselink + username;
  $.getJSON(link, function(data) {

    if (data.stream == null) {
      //offline
      var channelname = data._links.self.slice(data._links.self.lastIndexOf("/") + 1);
      var twitchlink = openlink + channelname;
      //  $(".channeloffline").append("<img src='"+imgsrc+"'/>");

      $(".channeloffline").append("<a target='blank' href='" + twitchlink + "'><h4>" + channelname + "</h4></a>");
      $(".channeloffline").append("<p>" + "offline" + "</p>");
      $(".channeloffline").append("<hr/>");
    } else {
      var channelname = data._links.self.slice(data._links.self.lastIndexOf("/") + 1);
      var twitchlink = openlink + channelname;
      //online
      var imgsrc = data.stream.channel.logo;
      $(".channelonline").append("<img src='" + imgsrc + "'/>");
      $(".channelonline").append("<a target='blank' href='" + twitchlink + "'><h4>" + channelname + "</h4></a>");
      $(".channelonline").append("<h4>" + data.stream.game + "</h4>");
      $(".channelonline").append("<p>" + data.stream.channel.status + "</p>");

      $(".channelonline").append("<hr/>");
    }
    console.log(data);
  });
}

$(".btn-primary").click(function(){
  $(".channelonline").show();
  $(".channeloffline").show();
});
$(".btn-warning").click(function(){
  $(".channeloffline").hide();
  $(".channelonline").show();
  
});
$(".btn-default").click(function(){
  $(".channelonline").hide();
  $(".channeloffline").show();
});