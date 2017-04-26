//Creating player Json
//These vars will act as a holder for the data until
//we are ready to send it to the DB via Json
var playerObj = new Object();
$(document).ready(function()
{
	//hide all divs but the first and incremently show them and hide accordingly

	$("#jobChoiceID").keyup(function(event)
	{
		//13 is the Enter key
		if(event.which === 13)
		{
			if($("#jobChoiceID").val() == 1)
			{
			    playerObj.job = "Banker";
			}
			if($("#jobChoiceID").val() == 2)
			{
			    playerObj.job = "Carpenter";
			}
			if($("#jobChoiceID").val() == 3)
			{
			    playerObj.job = "Farmer";
			}
			if($("#jobChoiceID").val() == 4)
			{
			    //TODO: Difference in Jobs
			}
		    console.log(playerObj.job);	
		    $("#profChoiceDisplay").hide();
		    //turn off  handler
			$("#jobChoiceID").off("keyup");
		    $("#nameChoiceDisplay").show();
		    $("#wagonLeaderID").focus();       
	    }
	});
    var wagonLead;
	$("#wagonLeaderID").keyup(function(event)
	{
		if(event.which === 13)
		{
			if($("#wagonLeaderID").val() != "")
			{
				playerObj.leaderName = $("#wagonLeaderID").val();
				console.log(playerObj.leaderName);
				$("#nameChoiceDisplay").hide();
				$("#partyChoiceDisplay").show();
				$("#partyLead").text(playerObj.leaderName);
				wagonLead = playerObj.leaderName;
				//turn off handler
				$("#wagonLeaderID").off("keyup");
				$("#partyMbr2ID").focus();
			}
		}
	});
	var mbr2;
	var mbr3;
	var mbr4;
	var mbr5;
	$("#partyMbr2ID").keyup(function(event)
	{
		if(event.which === 13)
		{
			mbr2 = $("#partyMbr2ID").val();
			console.log(mbr2);
			$("#partyMbr2ID").off("keyup");
			//move cursor to next box
			$("#partyMbr3ID").focus();
		}
	});
	$("#partyMbr3ID").keyup(function(event)
	{
		if(event.which === 13)
		{
			mbr3 = $("#partyMbr3ID").val();
			console.log(mbr3);
			$("#partyMbr3ID").off("keyup");
			//move cursor to next box
			$("#partyMbr4ID").focus();
		}
	});
	$("#partyMbr4ID").keyup(function(event)
	{
		if(event.which === 13)
		{
			mbr4 = $("#partyMbr4ID").val();
			console.log(mbr4);
			$("#partyMbr4ID").off("keyup");
			//move cursor to next box
			$("#partyMbr5ID").focus();
		}
	});
	$("#partyMbr5ID").keyup(function(event)
	{
		if(event.which === 13)
		{
			mbr5 = $("#partyMbr5ID").val();
			console.log(mbr5);
			var tempParty = [wagonLead,mbr2,mbr3,mbr4,mbr5];
			playerObj.party = tempParty;
			$("#partyChoiceDisplay").hide();
			$("#monthChoiceDisplay").show();
			$("#partyMbr5ID").off("keyup");
			//move cursor to month box
			$("#monthChoiceID").focus();
		}
	});

	$("#monthChoiceID").keyup(function(event)
	{
		if(event.which === 13)
		{
			if($("#monthChoiceID").val() == 1)
			{
				playerObj.departMonth = "March";
			}
			if($("#monthChoiceID").val() == 2)
			{
				playerObj.departMonth = "April";
			}
			if($("#monthChoiceID").val() == 3)
			{
				playerObj.departMonth = "May";
			}
			if($("#monthChoiceID").val() == 4)
			{
				playerObj.departMonth = "June";
			}
			if($("#monthChoiceID").val() == 5)
			{
				playerObj.departMonth = "July";
			}
			if($("#monthChoiceID").val() == 6)
			{
				//TODO: Handle "Ask for Adivce"
			}
			console.log(playerObj.departMonth);
			$("#monthChoiceID").off("keyup");

			//On the last page before game starts stringify JS obj 'playerObj'
			//to send to DB
			var playerJSON = JSON.stringify(playerObj);
			console.log(playerJSON);
		}
	});
});
