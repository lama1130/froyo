
        window.onload = function() {
            let flavors = prompt("Pick your froyo flavors: vanilla, strawberry, orcoffee:");
            if (flavors) {
                document.getElementById('flavorInput').value = flavors;
                countFlavors();
            }
        };

        
        function countFlavors() {
            let input = document.getElementById('flavorInput').value;
            let flavors = input.split(',').map(flavor => flavor.trim().toLowerCase());
            
           
            let flavorCount = {};
            
       
            flavors.forEach(flavor => {
                if (flavor) {
                    flavorCount[flavor] = (flavorCount[flavor] || 0) + 1;
                }
            });
            
            console.log("Your froyo flavor order summary:");
            for (let flavor in flavorCount) {
                console.log(`${flavor}: ${flavorCount[flavor]}`);
            }
        }