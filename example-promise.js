function getTempCallback (location, callbackPassed){
	callbackPassed(undefined, 78);
	callbackPassed('City not found');
}


function getTempPomise(location){
	console.log('----- Promises without catch! -----');
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			resolve(79);
			reject('City not found');
		}, 1000);
	});
}

getTempCallback('Philadelphia', function(err, temp){
	console.log('----- Callbacks! -----');
	if(err){
		console.log('error', err);
	}
	else{
		console.log('success',temp);
	}
});

getTempPomise('Philadelphia').then(function(temp){
	console.log('Promise success', temp);
}, function(err){
	console.log('Promise fails', err);
});

//Challenge area

function addPromise(a,b){
	return new Promise(function(resolve, reject){
		if(typeof a === 'number' && typeof b === 'number'){
			resolve(a+b);
		}
		else{
			reject('Invalid number');
		}
	});
}

addPromise(5,7).then(function(sum){
	console.log('The sum is: ',sum);
},function(err){
	console.log('error', err);
});

addPromise(5,'_').then(function(sum){
	console.log('The sum is: ',sum);
},function(err){
	console.log('error', err);
});

addPromise(4,4).then(function(sum){
	console.log('The sum is: ',sum);
}).catch(function(err){
	console.log('error', err);
});

addPromise('re',4).then(function(sum){
	console.log('The sum is: ',sum);
}).catch(function(err){
	console.log('error', err);
});