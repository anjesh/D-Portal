!function(t,e){e.ctrack=t,t.chunks={chunk1:"\nThis is some {test} data! \n",chunk2:"\nThis is some more data\n{chunk1}\n",loading:"\n<b>Please wait, requesting data from iati-datastore...</b>\n",preparing:"\n<b>Please wait, preparing page...</b>\n",dump_act:'<a href="#ctrack_index">BACK</a>\n<table>\n<tr><td>id:</td><td>{id}</td></tr>\n<tr><td>title:</td><td>{title}</td></tr>\n<tr><td>status:</td><td>{status} ({status-code})</td></tr>\n<tr><td>start-date:</td><td>{start-date}</td></tr>\n<tr><td>end-date:</td><td>{end-date}</td></tr>\n<tr><td>description:</td><td>{description}</td></tr>\n</table>\n<br/>\n\n',title:"Country Tracker\n",bodytest:'{ctnav}\n<div style="width:1040px; margin:0 auto; background-color:#fff; padding-top:110px;">\n{cthead}\n{ctbox1}\n{ctbox1table}\n{ctbox1more}\n{ctboxes}\n{ctnear}\n{ctfooter}\n{ctfind}\n</div>\n\n</div>\n',ctnav:'<div style="width:100%; background-color:#96CBFF; border-bottom:11px solid #BDD9FC; height:90px; position:fixed;">\n<div style="width:960px; margin:0 auto; color:#fff; font-size:32px; padding-top:30px;">\n<div style="display:inline-block; vertical-align:top; width:760px; height:30px;"><a href="#"><img src="art/ctlogo.png" alt="Country Tracker logo" width="350" height="30"/></a></div><div style="width:200px; display:inline-block; text-align:right;"><a href="#about" class="navabout">About</a></div>\n</div>\n</div>\n\n',divtop:'<div style="width:1040px; margin:0 auto; background-color:#fff;">',divbot:"</div>\n\n",cthead:'<div style="width:960px; margin:0 auto; color:#444; padding-top:40px;">\n<div style="display:inline-block; vertical-align:top; width:150px; height:90px;"><img src="art/bgflag.png" alt="Bangladesh flag" width="150" height="90"/></div><div style="display:inline-block; vertical-align:top; padding-left:20px;">\n<div style="color:#8E9092; font-size:32px;">What\'s going on?</div><div style="font-size:64px; letter-spacing:5px; color:#444; line-height:1.0em;">BANGLADESH</div></div><a title="This denotes the current cut-off time for the current data population and will not be visible in the widget." style="display:inline-block; vertical-align:top; padding-left:100px; text-align:center; color:#ccc; font-size:32px;"><div style="font-size:20px;">TIME STAMP</div><div style="color:#bbb;">{today}</div></a>\n</div>\n\n\n\n',ctbox1:'<div style="width:954px; margin:0 auto; color:#444; margin-top:40px; border:3px solid #D8D8D8;">\n<div style="width:634px; padding:30px; display:inline-block; vertical-align:top; border-right:3px solid #D8D8D8; max-height:240px;">{ctactive}</div><div style="display:inline-block; vertical-align:top; width:257px; max-height:240px;"><div style="padding:20px 10px 10px 30px; border-bottom:3px solid #D8D8D8; height:50%;">{ctactivities}</div><div style="padding:20px 10px 10px 30px; height:50%;">{ctpublishers}</div></div>\n</div>\n\n\n\n',ctactive:'<div style="padding-left:10px; font-size:32px; color:#A5BBC0;">Active Projects</div>\n<div style="font-size:128px; color:#444;">{active_projects}</div>\n\n\n\n',ctactivities:'<div style="padding-left:5px;font-size:20px; color:#A5BBC0;">Total Projects</div>\n<div style="font-size:56px; color:#444;">{total_projects}</div>\n\n\n\n',ctpublishers:'<div style="padding-left:5px;font-size:20px; color:#A5BBC0;">Publishers</div>\n<div style="font-size:56px; color:#444;">{numof_publishers}</div>\n\n\n\n',ctbox1table_data:'<tr><td>{num}.</td><td><div><a href="#ctrack_activity" activity="{aid}">{title}</a></div></td><td>{date}</td></tr>\n',ctbox1table:'<table class="box1">\n<tr><td colspan="2" style="font-size:12px; color:#666; line-height:2.0em;">ENDING SOON</td><td style="font-size:12px; color:#666; line-height:2.0em;">END DATE</td></tr>\n{ctbox1table_datas}\n</table>\n',old:'<tr><td>1.</td><td><div>Paribarvittik Jeboboichittra Gram (PJG) Project</div></td><td>334461</td></tr>\n<tr><td>2.</td><td><div>Flood Resistant Shelter for South-West region in Bangladesh (FRESH)</div></td><td>1612124</td></tr>\n<tr><td>3.</td><td><div>Empowering Women RMG Workers Project Bangladesh</div></td><td>313887</td></tr>\n<tr><td>4.</td><td><div>Flood Resistant Shelter for South-West region in Bangladesh (FRESH)</div></td><td>1612124</td></tr>\n<tr><td>5.</td><td><div>Empowering Women RMG Workers Project Bangladesh</div></td><td>334461</td></tr>\n\n\n\n<tr><td>1.</td><td><div>Paribarvittik Jeboboichittra Gram (PJG) Project</div></td><td>334461</td></tr>\n<tr><td>2.</td><td><div>Flood Resistant Shelter for South-West region in Bangladesh (FRESH)</div></td><td>1612124</td></tr>\n<tr><td>3.</td><td><div>Empowering Women RMG Workers Project Bangladesh</div></td><td>313887</td></tr>\n<tr><td>4.</td><td><div>Flood Resistant Shelter for South-West region in Bangladesh (FRESH)</div></td><td>1612124</td></tr>\n<tr><td>5.</td><td><div>Empowering Women RMG Workers Project Bangladesh</div></td><td>334461</td></tr>\n\n\n\n<tr><td>1.</td><td><div>Paribarvittik Jeboboichittra Gram (PJG) Project</div><div style="padding-top:10px;"><img src="art/logo1.png" alt="logo" width="215" height="49"/></div></td><td>2014-01-17</td></tr>\n<tr><td>2.</td><td><div>Flood Resistant Shelter for South-West region in Bangladesh (FRESH)</div><div style="padding-top:10px;"><img src="art/logo2.png" alt="logo" width="215" height="49"/></div></td><td>2014-02-24</td></tr>\n<tr><td>3.</td><td><div>Empowering Women RMG Workers Project Bangladesh</div><div style="padding-top:10px;"><img src="art/logo3.png" alt="logo" width="215" height="49"/></div></td><td>2014-06-07</td></tr>\n<tr><td>4.</td><td><div>Flood Resistant Shelter for South-West region in Bangladesh (FRESH)</div><div style="padding-top:10px;"><img src="art/logo1.png" alt="logo" width="215" height="49"/></div></td><td>2014-11-13</td></tr>\n<tr><td>5.</td><td><div>Empowering Women RMG Workers Project Bangladesh</div><div style="padding-top:10px;"><img src="art/logo2.png" alt="logo" width="215" height="49"/></div></td><td>2015-03-12</td></tr>\n\n\n\n\n<tr><td>1.</td><td><div>Project A</div></td><td>Pakistan</td><td>334461</td></tr>\n<tr><td>2.</td><td><div>Flood Resistant Shelter for South-West region in Bangladesh (FRESH)</div></td><td>Nepal</td><td>1612124</td></tr>\n<tr><td>3.</td><td><div>Project C</div></td><td>Russia</td><td>313887</td></tr>\n<tr><td>4.</td><td><div>Empowering Women RMG Workers Project Bangladesh</div></td><td>China</td><td>1612124</td></tr>\n<tr><td>5.</td><td><div>Project E</div></td><td>Korea</td><td>334461</td></tr>\n\n\n\n',ctbox1more:'<div style="width:960px; margin:0 auto;">\n<a href="#ctrack_ending_more" class="boxmore">LOAD MORE</a>\n</div>\n\n\n\n',ctboxes:'<div style="width:960px; margin:0 auto;">\n<div style="display:inline-block; vertical-align:top; margin-right:60px;">{ctbox2}{ctbox2table}{ctbox2more}</div><div style="display:inline-block; vertical-align:top;">{ctbox3}{ctbox3table}{ctbox3more}</div>\n</div>\n\n\n\n',ctbox2:'<div style="width:444px; margin:0 auto; color:#444; margin-top:40px; border:3px solid #D8D8D8;">\n<div style="width:270px; padding:20px; display:inline-block; vertical-align:top;">{ctend}</div><div style="display:inline-block; vertical-align:top; width:134px; padding-top:40px;"><img src="art/graph.png" alt="Growth Graph" width="84" height="94"/></div>\n</div>\n\n\n\n',ctend:'<div style="padding-left:10px; font-size:20px; color:#B19090;">Ended Projects</div>\n<div style="font-size:86px; color:#444;">{finished_projects}</div>\n\n\n\n',ctbox2table_data:'<tr><td>{num}.</td><td><div><a href="#ctrack_activity" activity="{activity}">{title}</a></div></td><td>{date}</td></tr>\n',ctbox2table:'<table class="box2">\n<tr><td colspan="2" style="font-size:12px; color:#666;">ENDING SOON</td><td style="font-size:12px; color:#666;">END DATE</td></tr>\n{ctbox2table_datas}\n</table>\n',ctbox2more:'<div style="width:450px; margin:0 auto;">\n<a href="#ctrack_finished_more" class="boxmore">LOAD MORE</a>\n</div>\n',ctbox3more:'<div style="width:450px; margin:0 auto;">\n<a href="#ctrack_starting_more" class="boxmore">LOAD MORE</a>\n</div>\n\n\n',ctbox3:'<div style="width:444px; margin:0 auto; color:#444; margin-top:40px; border:3px solid #D8D8D8;">\n<div style="width:270px; padding:20px; display:inline-block; vertical-align:top;">{ctplan}</div><div style="display:inline-block; vertical-align:top; width:134px; padding-top:40px;"><img src="art/graph.png" alt="Growth Graph" width="84" height="94"/></div>\n</div>\n\n\n\n',ctplan:'<div style="padding-left:10px; font-size:20px; color:#96B67C;">Planned Projects</div>\n<div style="font-size:86px; color:#444;">{planned_projects}</div>\n\n\n',ctbox3table_data:'<tr><td>{num}.</td><td><div><a href="#ctrack_activity" activity="{activity}">{title}</a></div><div style="padding-top:10px;"><img src="art/logo1.png" alt="logo" width="215" height="49"/></div></td><td>{date}</td></tr>\n',ctbox3table:'<table class="box3">\n<tr><td colspan="2" style="font-size:12px; color:#666;">STARTING SOON</td><td style="font-size:12px; color:#666;">START DATE</td></tr>\n{ctbox3table_datas}\n</table>\n',ctnear:'<div style="width:960px; margin:0 auto; margin-top:60px; background-color:#E5EFFA; padding-bottom:40px;">{ctnearhead}{ctneartable}{ctnearmore}</div>\n\n\n\n',ctnearhead:'<div style="width:880px; padding:30px 40px 0 40px; margin:0 auto;">\n<div style="border-bottom:3px solid #CDE2E7; padding-bottom:20px;">\n<div style="display:inline-block; font-size:38px; color:#3C98AF; width:635px;"><div style="display:inline-block; padding-right:10px; width:30px;"><img src="art/compass.png" alt="compass icon" width="30" height="30" /></div>What\'s going on nearby?</div><a href="#" style="display:inline-block; font-size:20px; text-align:right; color:#999;">Change radius of 600 miles</a>\n</div>\n</div>\n\n\n\n',ctneartable_data:'<tr><td>{num}.</td><td><div><a href="#ctrack_activity" activity="{activity}">{title}</a></div></td><td>{country}</td><td>{date}</td></tr>\n',ctneartable:'<table class="near">\n<tr><td colspan="2" style=" font-size:12px; color:#999; line-height:2.3em;">ACTIVE PROJECTS ENDING SOON</td><td style="font-size:12px; color:#999; line-height:2.3em;">LOCATION &#8743; &#8744;</td><td style="font-size:12px; color:#999; line-height:2.3em;">END DATE</td></tr>\n{ctneartable_datas}\n</table>\n',ctnearmore:'<div style="width:880px; margin:0 auto; padding:0 40px;">\n<a href="#ctrack_near_more" class="nearmore">LOAD MORE</a>\n</div>\n\n\n\n',ctfooter:'<div style="width:960px; margin:0 auto; margin-top:40px;">{ctfootboxes}</div>\n\n\n\n',ctfootboxes:'<div style="display:inline-block; vertical-align:top; width:370px; margin:0 auto;">{ctabout}</div><div style="display:inline-block; vertical-align:top; width:330px; margin:0 auto;">{ctlogo}</div><div style="display:inline-block; vertical-align:top; width:260px; margin:0 auto;">{ctembed}</div>\n\n\n\n',ctabout:'<a name="about"></a>\n<div style="width:370px; margin:0 auto; text-align:justify; font-size:18px; color:#777; line-height:1.4em;">The Country Tracker project will build and release a set of tools that can be used by other parties.  It is envisaged that many of these tools will be valuable to data users in terms of querying, pulling, parsing, evaluating and segmenting IATI data.</div>\n\n\n\n',ctlogo:'<a href="http://iatistandard.org/" target="_blank" style="width:270; margin:0 auto; padding:0 30px;"><img src="art/iati-logo.png" alt="IATI logo" width="269" height="70"/></a>\n\n\n\n',ctembed:'<div style="width:260px; margin:0 auto; font-size:16px; color:#444; padding-bottom:10px;">Embed this on your website!</div>\n<div style="width:198px; height:70px; margin:0 auto; border:1px solid #444; padding:20px 30px; color:#ccc; font-size:14px; resize:both;\noverflow:auto; background-color:rgb(255, 255, 255);">HTML embed code will be placed here for copy and pasting on to your website.</div>\n\n\n\n',ctfind:'<div class="footer">\n<div style="width:960px; margin:0 auto;">\n<div style="display:inline-block; vertical-align:top; width:520px; font-size:28px; padding-right:20px;">Find out what\'s going on where you live</div><div style="display:inline-block; vertical-align:top; width:340px; height:35px; background-color:#F7EA61; border-bottom:3px solid #C7B740; font-size:28px; color:#fff;">eg. United Kingdom</div><a href=# style="display:inline-block; vertical-align:top; width:35px; height:35px; padding-left:35px;"><img src="art/find.png" alt="Find" width="35" height="35" /></a>\n</div>\n</div>\n\n\n\n'};var a=a||t;a.plate={},a.plate.preps={},a.plate.prepare=function(t){if(a.plate.preps[t])return a.plate.preps[t];var i=t.split("{"),e=[];e.push(i[0]);for(var n=1;n<i.length;n++){e.push("{");for(var d=i[n].split("}"),o=0;o<d.length;o++)e.push(d[o])}return a.plate.preps[t]=e,e},a.plate.lookup=function(t,i){return void 0!=i[t]?i[t]:"{"+t+"}"},a.plate.chunk=function(t,i){return a.plate.replace(a.chunks[t],i)},a.plate.chunks=function(t,i){return a.plate.replaces(a.chunks[t],i)},a.plate.replace=function(t,i){for(var e=a.plate.prepare(t),n=[],d=0;d<e.length;d++){var o=e[d];"{"==o?(d++,o=e[d],n.push(a.plate.lookup(o,i))):n.push(o)}return n.join("")},a.plate.replaces=function(t,i){for(var e=[],n=0;n<i.length;n++)e.push(a.plate.replace(t,i[n]));return e.join("")};var a=a||t;a.setup_html=function(t){a.args=t,a.div={},a.div.master=$(a.args.master),a.div.main=$('<div class="ctrack_main"></div>'),a.div.master.empty(),a.div.master.append(a.div.main),a.div.main.html(a.plate.chunk("loading",{}));var e={},n=function(t,i){return e[t]=void 0!=i?i:a.plate.chunk(t,e),e[t]};a.htmldata=e,a.htmlchunk=n,a.htmlchunk("ctbox1table_datas","<tr><td>Loading...</td></tr>"),a.htmlchunk("active_projects",0),a.htmlchunk("ctbox2table_datas","<tr><td>Loading...</td></tr>"),a.htmlchunk("finished_projects",0),a.htmlchunk("ctbox3table_datas","<tr><td>Loading...</td></tr>"),a.htmlchunk("planned_projects",0),a.htmlchunk("ctneartable_datas","<tr><td>Loading...</td></tr>"),a.htmlchunk("numof_publishers",0),a.htmlchunk("total_projects",0),a.htmlchunk("today",a.get_today()),a.htmlall=function(t){return n("ctend"),n("ctplan"),n("ctabout"),n("ctlogo"),n("ctembed"),n("ctactive"),n("ctactivities"),n("ctpublishers"),n("ctbox2"),n("ctbox2table"),n("ctbox2more"),n("ctbox3"),n("ctbox3table"),n("ctbox3more"),n("ctbox2more"),n("ctnearhead"),n("ctneartable"),n("ctnearmore"),n("ctfootboxes"),n("ctnav"),n("cthead"),n("ctbox1"),n("ctbox1table"),n("ctbox1more"),n("ctboxes"),n("ctnear"),n("ctfooter"),n("ctfind"),t?n(t):void 0},a.div.main.html(a.htmlall("bodytest")),a.fetch_near=function(t){t=t||{},t.limit=t.limit||5,t.country="bd",t.callback=t.callback||function(t){console.log("fetch endingsoon NP "),console.log(t);var e=[];for(i=0;i<t.rows.length;i++){var n=t.rows[i];n.num=i+1,n.date=a.get_nday(n.day_end),n.country="Nepal",n.activity=n.aid,e.push(a.plate.chunk("ctneartable_data",n))}a.htmlchunk("ctneartable_datas",e.join("")),a.div.main.html(a.htmlall("bodytest"))},a.fetch_endingsoon(t)},a.fetch_endingsoon({limit:5}),a.fetch_finished({limit:5}),a.fetch_planned({limit:5}),a.fetch_near({limit:5}),a.fetch_stats({}),$(document).on("click","a",function(t){var i=$(this).prop("href");if(i&&(i=i.split("#"),i[1])){i=i[1];var e=i.split("_");if(console.log(i),"ctrack"==e[0])if(t.preventDefault(),"index"==e[1])a.div.main.html(a.htmlall("bodytest"));else if("activity"==e[1]){var i=$(this).attr("activity");console.log(i),a.fetch_activity({activity:i})}else if("more"==e[2])switch(e[1]){case"ending":a.fetch_endingsoon({limit:20});break;case"finished":a.fetch_finished({limit:20});break;case"starting":a.fetch_planned({limit:20});break;case"near":a.fetch_near({limit:20})}}})};var a=a||t;a.iati={},a.iati.totext=function(t){return"string"==typeof t?t:"object"==typeof t?a.iati.totext(t.text):""},a.iati.fill_text=function(t,i,e){for(var n=0;n<e.length;n++)i[e[n]]=a.iati.totext(t[e[n]])},a.iati.array_status=["Pipeline","Implementation","Completion","Post","Cancelled"],a.iati.lookup_status=function(t){return a.iati.array_status[t]||"N/A"},a.iati.clean_activity=function(t){var i={};return t["iati-activity"]&&(t=t["iati-activity"]),a.iati.fill_text(t,i,["title","description","reporting-org"]),i["status-code"]=Number(t["activity-status"]&&t["activity-status"].code||-1),i.status=a.iati.lookup_status(i["status-code"]),i["start-date"]=t["start-actual"]||t["start-planned"],i["end-date"]=t["end-actual"]||t["end-planned"],i.id=t["iati-identifier"],i},a.iati.clean_activities=function(t){for(var i=[],e=0;e<t.length;e++)i[e]=a.iati.clean_activity(t[e]);return i};var a=a||t;a.get_today=function(){var t=new Date,i=("0"+t.getDate()).slice(-2),e=("0"+(t.getMonth()+1)).slice(-2),a=t.getFullYear()+"-"+e+"-"+i;return a},a.get_nday=function(t){var i=new Date(1e3*t*60*60*24),e=("0"+i.getDate()).slice(-2),a=("0"+(i.getMonth()+1)).slice(-2),n=i.getFullYear()+"-"+a+"-"+e;return n},a.fetch_endingsoon=function(t){t=t||{};var e=a.get_today(),n={from:"activities",limit:t.limit||5,orderby:"day_end",status_code:"2",day_end_gt:e,recipient_country_codes_like:"%/"+(t.country||a.args.country)+"/%"},d=t.callback||function(t){console.log("fetch endingsoon : "+e),console.log(t);var n=[];for(i=0;i<t.rows.length;i++){var d=t.rows[i];d.num=i+1,d.date=a.get_nday(d.day_end),d.activity=d.aid,n.push(a.plate.chunk("ctbox1table_data",d))}a.htmlchunk("ctbox1table_datas",n.join("")),a.div.main.html(a.htmlall("bodytest"))};$.ajax({dataType:"json",url:a.args.datastore+"/q?callback=?",data:n,success:d})},a.fetch_finished=function(t){t=t||{};var e=a.get_today(),n={from:"activities",limit:t.limit||5,orderby:"day_end-",status_code:"3|4",day_end_lt:e,recipient_country_codes_like:"%/"+(t.country||a.args.country)+"/%"},d=t.callback||function(t){console.log("fetch finshed : "+e),console.log(t);var n=[];for(i=0;i<t.rows.length;i++){var d=t.rows[i];d.num=i+1,d.date=a.get_nday(d.day_end),d.activity=d.aid,n.push(a.plate.chunk("ctbox2table_data",d))}a.htmlchunk("ctbox2table_datas",n.join("")),a.div.main.html(a.htmlall("bodytest"))};$.ajax({dataType:"json",url:a.args.datastore+"/q?callback=?",data:n,success:d})},a.fetch_planned=function(t){t=t||{};var e=a.get_today(),n={from:"activities",limit:t.limit||5,orderby:"day_start",status_code:1,day_start_gt:e,recipient_country_codes_like:"%/"+(t.country||a.args.country)+"/%"},d=t.callback||function(t){console.log("fetch planned : "+e),console.log(t);var n=[];for(i=0;i<t.rows.length;i++){var d=t.rows[i];d.num=i+1,d.date=a.get_nday(d.day_start),d.activity=d.aid,n.push(a.plate.chunk("ctbox3table_data",d))}a.htmlchunk("ctbox3table_datas",n.join("")),a.div.main.html(a.htmlall("bodytest"))};$.ajax({dataType:"json",url:a.args.datastore+"/q?callback=?",data:n,success:d})},a.fetch_stats=function(t){t=t||{};var e=(a.get_today(),function(){var i={from:"activities",select:"stats",recipient_country_codes_like:"%/"+(t.country||a.args.country)+"/%"},e=t.callback||function(t){console.log("activity stats1"),console.log(t),a.htmlchunk("total_projects",t.rows[0]["COUNT(*)"]),a.htmlchunk("numof_publishers",t.rows[0]["COUNT(DISTINCT reporting_org)"]),a.div.main.html(a.htmlall("bodytest"))};$.ajax({dataType:"json",url:a.args.datastore+"/q?callback=?",data:i,success:e})});e();var n=function(){var e={from:"activities",select:"stats",groupby:"status_code",recipient_country_codes_like:"%/"+(t.country||a.args.country)+"/%"},n=t.callback||function(t){console.log("activity stats2"),console.log(t);var e={};for(i=0;i<t.rows.length;i++){var n=t.rows[i],d=n["MAX(status_code)"],o=n["COUNT(*)"];e[d]=o}a.htmlchunk("active_projects",e[2]||0),a.htmlchunk("finished_projects",(e[3]||0)+(e[4]||0)),a.htmlchunk("planned_projects",e[1]||0)};$.ajax({dataType:"json",url:a.args.datastore+"/q?callback=?",data:e,success:n})};n()},a.fetch_activity=function(t){return}}({},function(){return this}());
//# sourceMappingURL=ctrack.map