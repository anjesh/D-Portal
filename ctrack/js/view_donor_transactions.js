// Copyright (c) 2014 International Aid Transparency Initiative (IATI)
// Licensed under the MIT license whose full text can be found at http://opensource.org/licenses/MIT


var view_donor_transactions=exports;
exports.name="stats";

var ctrack=require("./ctrack.js")
var plate=require("./plate.js")
var iati=require("./iati.js")
var fetch=require("./fetch.js")

var refry=require("../../dstore/js/refry.js")
var iati_codes=require("../../dstore/json/iati_codes.json")
var crs_year=require("../../dstore/json/crs_2012.json")

var commafy=function(s) { return s.replace(/(^|[^\w.])(\d{4,})/g, function($0, $1, $2) {
		return $1 + $2.replace(/\d(?=(?:\d\d\d)+(?!\d))/g, "$&,"); }) };

// the chunk names this view will fill with new data
view_donor_transactions.chunks=[
	"donor_transactions_datas",
];

//
// display the view
//
view_donor_transactions.view=function()
{
	view_donor_transactions.chunks.forEach(function(n){ctrack.chunk(n,"{spinner_in_table_row}");});
	ctrack.setcrumb(2);
	ctrack.change_hash();
	view_donor_transactions.ajax({year:ctrack.hash.year,funder:ctrack.hash.funder});
};

//
// Perform ajax call to get data
//
view_donor_transactions.ajax=function(args)
{
	args=args || {};

	var year=args.year || 2012;
	var funder=args.funder || "gb";

	var dat={
			"from":"act,trans,country",
			"limit":args.limit || -1,
			"select":"sum_of_percent_of_trans_usd,aid,funder,title,reporting_org",
//			"funder_not_null":"",
			"funder":funder,
			"groupby":"aid",
			"orderby":"1-",
			"trans_code":"D|E",
			"trans_day_gteq":year+"-01-01","trans_day_lt":(parseInt(year)+1)+"-01-01",
			"country_code":(args.country || ctrack.args.country)
		};
	fetch.ajax(dat,function(data){
		console.log("fetch donor_transactions "+year);
		console.log(data);

		var total=0;
		var s=[];
		for(var i=0;i<data.rows.length;i++)
		{
			var v=data.rows[i];
			var d={};
			d.num=i+1;
			d.funder=v.funder;
			d.aid=v.aid;
			d.title=v.title || v.aid;
			d.reporting_org=v.reporting_org;
			d.amount=commafy(""+Math.floor(v.sum_of_percent_of_trans_usd));
			total+=v.sum_of_percent_of_trans_usd;

			s.push( plate.replace("{donor_transactions_data}",d) );
		}
		
		ctrack.chunk("alerts","");
		if( iati_codes.crs_no_iati[funder] )
		{
			ctrack.chunk("alerts","{alert_no_iati}");
		}

		ctrack.chunk("donor",iati_codes.funder_names[funder] || iati_codes.country[funder] || funder );
		ctrack.chunk("year",year);
		ctrack.chunk("total",commafy(""+Math.floor(total)));

		ctrack.chunk("donor_transactions_datas",s.join(""));
		ctrack.display();
	});
}
