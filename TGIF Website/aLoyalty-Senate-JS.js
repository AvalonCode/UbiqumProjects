var dems= [];
var reps= [];
var inds= [];
var demsPercent= [];
var repsPercent= [];
var indsPercent= [];
let member= data.results[0].members;

function partyTotal(member){
    for (var i=0; i<member.length; i++){
        if (member[i].party == "D"){
            dems.push(member[i].first_name + " " + member[i].last_name);
            demsPercent.push(member[i].votes_with_party_pct);
        }
        else if (member[i].party == "R"){
            reps.push(member[i].first_name + " " + member[i].last_name);
            repsPercent.push(member[i].votes_with_party_pct);

        }
        else { inds.push(member[i].first_name + " " + member[i].last_name);
                indsPercent.push(member[i].votes_with_party_pct);
        }
    }
}

partyTotal(member);

function partyPercent(whatever){
  var sum= 0;
    for (i=0; i<whatever.length; i++){
        sum+= whatever[i];
    }
    return sum/whatever.length;
}

var senateTable = '';

{
	senateTable += `
    <tr>
    <th>Party</th>
    <th>No. of Reps</th>
    <th>% Voted w/ Party</th>
    </tr>
	<tr>
        <td>Democrats</td>
		<td>${dems.length}</td>
		<td>${partyPercent(demsPercent).toFixed(2)}%</td>
    </tr>
    <tr>
        <td>Republicans</td>
		<td>${reps.length}</td>
		<td>${partyPercent(repsPercent).toFixed(2)}%</td>
    </tr>
    <tr>
        <td>Independent</td>
		<td>${inds.length}</td>
		<td>${partyPercent(indsPercent).toFixed(2)}%</td>
	</tr>
    <tr>
        <td>Total</td>
        <td>${dems.length + reps.length + inds.length}</td>	<td>${((parseFloat(partyPercent(demsPercent).toFixed(2))+parseFloat(partyPercent(repsPercent).toFixed(2))+parseFloat(partyPercent(indsPercent).toFixed(2)))/3).toFixed(1)}%</td>
    </tr>`;
}

document.getElementById('partyTable').innerHTML = senateTable;

var totalPct=[];

function partyPct(member){
    for (var i=0; i<member.length; i++){
        totalPct.push(member[i]);
    }
}

partyPct(member);

member.sort(function (a, b){
              return (a.votes_with_party_pct - b.votes_with_party_pct)
            });


var pctOrder= [];

function orderThis(totalPct){
    for (i=0; i<totalPct.length/10; i++){
    pctOrder.push(member[i]);
    }
    return pctOrder;
}

orderThis(totalPct);

let leastLoyalTable= '';

for(i=0; i<pctOrder.length; i++){
    
	leastLoyalTable += `
    <tr>
		<td><a href= ${pctOrder[i].url}> ${pctOrder[i].first_name} ${pctOrder[i].middle_name || ''} ${pctOrder[i].last_name}</a></td>
		<td>${pctOrder[i].total_votes}</td>
		<td>${pctOrder[i].votes_with_party_pct + "%"}</td>
	</tr>`;
}

document.getElementById('leastTable').innerHTML = leastLoyalTable;

var totalPct2= [];

function partyPct2(member){
    for (var i=0; i<member.length; i++){
        totalPct2.push(member[i]);
    }
}

partyPct2(member);

member.sort(function (a, b){
              return (b.votes_with_party_pct - a.votes_with_party_pct)
            });

var pctReverse= [];

function orderThis2(totalPct2){
    for (i=0; i<totalPct2.length/10; i++){
    pctReverse.push(member[i]);
    }
    return pctReverse;
}

orderThis2(totalPct2);

let mostLoyalTable= '';

for(i=0; i<pctReverse.length; i++){
    
	mostLoyalTable += `
    <tr>
		<td><a href= ${pctReverse[i].url}> ${pctReverse[i].first_name} ${pctReverse[i].middle_name || ''} ${pctReverse[i].last_name}</a></td>
		<td>${pctReverse[i].total_votes}</td>
		<td>${pctReverse[i].votes_with_party_pct + "%"}</td>
	</tr>`;
}

document.getElementById('mostTable').innerHTML = mostLoyalTable;