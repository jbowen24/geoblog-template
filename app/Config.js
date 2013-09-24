define([],
	function ()
	{
		configOptions = {
			//The appid for the configured application
			appid: "",
			//The web map id
			webmap: "2406f3f2e13e49539312cd02cae22da7",
			//ArcGIS Online usernames of those who are authorized the edit blog, sepereate by comma
			authorizedEditors: ["StoryMaps","ssylvia_stories","acarroll_storymaps","dasbury_storymaps","rrose_story"],
			//Enter the url to the feature service storing blog posts
			featureService: "http://services.arcgis.com/nzS0F0zdNLvs7nc8/arcgis/rest/services/Elephants/FeatureServer/0",
			//Start post object ID
			post: null,
			//Allow deletes from app
			allowDeletes: false,
			//Height of feature service icon
			iconHeight: 32,
			//Feature servide field to sort by
			sortBy: "time",
			//Display order of feature service; specfiy "ASC" (ascending) or "DESC" (descending).
			order: "ASC",
			//Number of post available per pages (recommend 10 for smaller screens);
			postsPerPage: 10,
			//If true, time extent is cumulative to blog post date. If false, time extent is the state in time of blog post
			cumulativeTime: true,
			//Earliest year in time enabled layers
			earliestYear: "1970",
			//If true, when a blog post is selected and a point has been set on the map, the point graphic will display even if layer is turned off
			alwaysDisplayPoints: false,
			//Enter a title, if no title is specified, the webmap's title is used.
			title: "Devastating decline of forest elephant habitat in Central Africa",
			//Enter a subtitle, if not specified the ArcGIS.com web map's summary is used
			subtitle: "To save the remaining African forest elephants, illegal poaching for ivory and encroachment into core elephant habitat must be stopped. In addition, the international demand for ivory, which fuels illegal trade, must be dramatically reduced.",
			//Enter URL to be used with social media buttons embedded in post. The URL will also be appended with the post object id so make sure query parameter is included
			socialURL: "",
			//If the webmap uses Bing Maps data, you will need to provided your Bing Maps Key
			bingmapskey: "Akt3ZoeZ089qyG3zWQZSWpwV3r864AHStal7Aon21-Fyxwq_KdydAH32LTwhieA8",
			// Specify a proxy for custom deployment
			proxyurl: "",
			//specify the url to a geometry service
			geometryserviceurl: "http://tasks.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer",
			//Modify this to point to your sharing service URL if you are using the portal
			sharingurl: ""
		}
	}
);