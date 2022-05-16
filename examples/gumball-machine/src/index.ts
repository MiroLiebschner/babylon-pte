import { DefaultApi, ManifestBuilder } from 'pte-sdk';
import { getAccountAddress, signTransaction } from 'pte-browser-extension-sdk';

// Global states
let accountAddress = undefined; // User account address
let packageAddress = undefined; // GumballMachine package address
let componentAddress = '026dce6f5ef1747ec5e6a8fa1f7571312ab57f5edc4d0a49dc932b'; // GumballMachine component address
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
  // Construct manifest
  const manifest = new ManifestBuilder()
    .callFunction(
      packageAddress,
      'GumballMachine',
      'instantiate_gumball_machine',
      ['Decimal("1.0")'],
    )
    .build()
    .toString();

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
