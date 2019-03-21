var member= data.results[0].members;

tabCreate(data.results[0].members, '');

function tabCreate(member, lngParty, stateValue) {
    
    var tbodyHTML = '';
   
    for (i=0; i<member.length; i++) {
	   	
        if (member[i].party == lngParty[0]  ||  member[i].party == lngParty[1]  ||  member[i].party == lngParty[2] || lngParty.length == 0) {
            if ((stateValue == "all") || (stateValue == member[i].state) || (stateValue == undefined)){
        
        tbodyHTML += `
            <tr>
		      <td><a href= ${member[i].url}> ${member[i].first_name} ${member[i].middle_name || ''} ${member[i].last_name}</a></td>
              <td>${member[i].party}</td>
		      <td>${member[i].state}</td>
		      <td>${member[i].seniority}</td>
		      <td>${member[i].votes_with_party_pct + "%"}</td>
	        </tr>`;
            }
        }
    }
                document.getElementById('htableBody').innerHTML = tbodyHTML;
}

function isChecked(){
	var lngParty = [];
	var myCheck1 = document.getElementById("party1");
	if (myCheck1.checked == true) {
		lngParty.push(myCheck1.value);
	}
	var myCheck2 = document.getElementById("party2");
	if (myCheck2.checked == true) {
		lngParty.push(myCheck2.value);
	}
	var myCheck3 = document.getElementById("party3");
	if (myCheck3.checked == true) {
		lngParty.push(myCheck3.value);
	}
    
	return lngParty;
}

function stateDisplay(){
    var dataRes = data.results[0].members; 
    let allStates = [];
    for(i=0;i<dataRes.length;i++){  
		if (!allStates.includes('<option value="' + dataRes[i].state + '">' + dataRes[i].state + "</option>")){
			allStates.push('<option value="' + dataRes[i].state + '">' + dataRes[i].state + "</option>");
		}
	}

    allStates.sort();

    allStates.unshift('<option value="all"> All States </option>');

    document.getElementById("states").innerHTML = allStates;

}

stateDisplay(data.results[0].members);

function indexValue (){
    var e= document.getElementById("states");
    
    if (e.selectedIndex != -1) {
            var stateValue= e.options[e.selectedIndex].value;
        }
    return stateValue;
}