const mysql = require('mysql2');
const w3 = Web3(Web3.HTTPProvider("https://mainnet.infura.io/v3/e1aff836d3a64d6aba0f028217da381f"));
const ns = ENS.fromWeb3(w3);

const connection = mysql.createConnection({
	user: '******',
  password: '******',
  host: '******',
  database: '******',
});

connection.query(
	'SELECT * FROM `table`',
	function(err, results, fields){
		console.log(results);
		console.log(fields);
	}
);

jInput = [
  {
    "inputs": [
      {
        "internalType": "contract ENS",
        "name": "_ens",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "addresses",
        "type": "address[]"
      }
    ],
    "name": "getNames",
    "outputs": [
      {
        "internalType": "string[]",
        "name": "r",
        "type": "string[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]

//Function Reads First block

function getBlock(){
	// read block number
	let q_block = "SELECT Max(block) from ens.rev_registry";
	cursor.execute(q_block);
	foreach((block) in coursor){
		start_block = block;
	}
	if start_block == (null){
		start_block = (0);
	}

	return start_block[0];
}



//Function updates reverse registry table
function updateName(domain, address, block){
	let i_name = "insert into rev_registry (addr, name, block) values (%s, %s, %s)";
	let u_name = "update rev_registry set name = %s, block=%s where addr = %s";
	let d_name = "delete from rev_registry where addr = %s";
	if domain != "" {
		if domain == "NULL"{
			//delete name from the registry
			cursor.execute(d_name, [address]);
			my_cn.commit();
		}

		else {
			//insert or update
			try {
				//attempt to insert
				cursor.execute(i_name, [address, domain, block]);
			}
			//attempt to insert
			cursor.execute(i_name, [address, domain, block]);

			except mysql.connector.Error as err {
				//update if record is there
				if (err.errno) == 1062 {
					cursor.execute(u_name, [domain, block, address]);
				}

				else {
					print (err);
					quit();
				}
			}

			finally {
				my_cn.commit();
			}
		}

	}

}

contractReader = urllib.request.urlopen('https://api.etherscan.io/api?module=account&action=txlist&address=0x084b1c3c81545d370f3634392de611caabff8148&sort=desc&apikey=7I39Q4ZZ6SER7ZZTKQMNGYHD3UTZ6BSQ32');

var resp = req.read();
var tr = JSON.loads(resp);
var addresses[];
let i = 0;

var names = contractReader.functions.getNames(addresses).call();

let i = 0;
let mmm = maxcount;

foreach (txh in tr["result"]) {
	addresses.append(Web3.toChecksumAddress(txh["from"]));
	blocks.append(txh["blockNumber"]);
	i += 1;

	if (i == mmm) {
		mmm = mmm + maxcount;
		names = rrcontract.functions.getNames(addresses).call();

		let ii = 0;
		foreach (let(n) in names){
			console.log(addresses[ii] + "---" + n);
			fun.updateName(str(n), str(addresses[ii]), str(blocks[ii]));
			ii += 1;
		}
		let addresses = [];
		let blocks = [];
	}

}


var names = rrcontract.functions.getNames(addresses).call();


//Flushing the reminng addresses
let ii = 0
foreach(let(n) in names){
	console.log(addresses[ii] + "---" + n);
	fun.updateName(str(n), str(addresses[ii]), str(blocks[ii]));
	let ii += 1
}
