$('document').ready(function()
	{
		$('div#detailPane').css('width', "100%");
		$('div#detailPane div.section').css('width', "100%");

		// Add a row class to the mainPane and col class to children
		$('div.mainPane').addClass("row");
		$('div.mainPane div.sidebar').addClass("col-sm-2");
		$('div#detailPane div.sidebar').removeClass('col-sm-2').addClass("col-sm-12");
		$('div.pagecontent').addClass("col-sm-10");
		$('div.pagetitle').addClass("display-4");
		$('div.activityInfoBar').addClass('alert alert-info');
		$('div.activityInfoBar').attr("role", 'alert');

		// Change the  icons
		var normal = chrome.extension.getURL("images/core/zoom-out.svg");
		var large = chrome.extension.getURL("images/core/zoom-in.svg");
		var infoIcon = chrome.extension.getURL("images/core/info.svg");
		var mail = chrome.extension.getURL("images/communication/mail.svg");
		var user = chrome.extension.getURL("images/core/user.svg");
		var userPlus = chrome.extension.getURL("images/core/user-plus.svg");
		var pass = chrome.extension.getURL("images/core/hash.svg");

		$('div#textSizeNormal img').attr('src', normal);
		$('div#textSizeLarger img').attr('src', large);
		$('div#textSizeLargest img').attr('src', large);

		$('img.helpButtonEditBudget').attr('src', infoIcon).css('width', "18px");
		$('img.helpButtonEditTransaction').attr('src', infoIcon).css('width', "18px");
		$('img.helpButtonViewBudget').attr('src', infoIcon).css('width', "18px");
		$('img.helpButtonAlias').attr('src', infoIcon).css('width', "15px");
		$('img.helpButtonCurrentBalance').attr('src', infoIcon).css('width', "15px");
		$('img.helpButtonAvailableBalance').attr('src', infoIcon).css('width', "15px");

		$('img.helpButtonUserId').attr('src', user).css('width', "15px");
		$('img.helpButtonPassword').attr('src', pass).css('width', "15px");
		$('img.helpButtonNewCustomer').attr('src', userPlus).css('width', "15px");


		$('td.sign-out a img').attr('src', mail);
		
		
		$('a.negative').addClass('btn');
		$('div.buttons a.positive_sml').addClass('btn').removeClass('positive_sml');
		$('div.buttons a.negative_sml').addClass('btn').removeClass('negative_sml');

		$('input.btn_small').removeClass('btn_small').addClass('btn');


		
	});