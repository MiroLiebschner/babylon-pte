import { DefaultApi, ManifestBuilder } from 'pte-sdk';
import { getAccountAddress, signTransaction } from 'pte-browser-extension-sdk';

// Global states
let accountAddress = undefined; // User account address
let packageAddress = undefined; // GumballMachine package address
let componentAddress = '023864c2f9a7105d34ea0a08b20ea230cae874ba566056d39e8317'; // GumballMachine component address
let resourceAddress = undefined; // GUM resource address

document.getElementById('getTemperature').onclick = async function () {
  // Construct manifest
  const manifest = new ManifestBuilder()
    .callMethod(componentAddress, 'get_temperature', [])
    .build()
    .toString();

  // Send manifest to extension for signing
  const receipt = await signTransaction(manifest);

  // Update UI
  document.getElementById('temperature').innerText = JSON.stringify(
    receipt,
    null,
    2,
  );
};

document.getElementById('setTemperature').onclick = async function () {
  // Weather Api call to get the temperature
  var temp;
  const results = await fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=London,CA&appid=da178aaf3436b27ea916258b3faa6d1e',
  )
    .then((response) => response.json())
    .then((json) => (temp = json.main.temp));

  //Yes, this string interpolation is ugly. Tried different ways but it failed.
  const d1 = 'Decimal(';
  const d2 = '"';
  const d3 = ')';
  const tempAsDecString = d1 + d2 + temp + d2 + d3;

  // Construct manifest
  const manifest = new ManifestBuilder()
    .callMethod(componentAddress, 'set_temperature', [tempAsDecString])
    .build()
    .toString();

  // Send manifest to extension for signing
  const receipt = await signTransaction(manifest);

  // Update UI
  document.getElementById('newTemperature').innerText = JSON.stringify(
    temp,
    null,
    2,
  );
};

document.getElementById('instantiateComponent').onclick = async function () {
  console.log('Test1');
  // Construct manifest
  const manifest = new ManifestBuilder()
    .callFunction(
      packageAddress,
      'WeatherOracle',
      'instantiate_gumball_machine',
      [],
    )
    .build()
    .toString();

  console.log('Test2');

  // Send manifest to extension for signing
  const receipt = await signTransaction(manifest);

  // Update UI
  if (receipt.status == 'Success') {
    componentAddress = receipt.newComponents[0];
    resourceAddress = receipt.newResources[0];
    document.getElementById('componentAddress').innerText = componentAddress;
  } else {
    document.getElementById('componentAddress').innerText =
      'Error: ' + receipt.status;
  }
};

document.getElementById('publishPackage').onclick = async function () {
  // Load the wasm
  const response = await fetch('./gumball_machine.wasm');
  const wasm = new Uint8Array(await response.arrayBuffer());

  // Construct manifest
  const manifest = new ManifestBuilder()
    .publishPackage(wasm)
    .build()
    .toString();

  // Send manifest to extension for signing
  const receipt = await signTransaction(manifest);

  // Update UI
  packageAddress = receipt.newPackages[0];
  document.getElementById('packageAddress').innerText = packageAddress;
};
