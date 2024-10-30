import fs from 'fs';

let data = {
  users: {},
  subscriptions: [],
}

// Reads and parses data object from 'save_data.json' using filesync.
function readData() {
  if (fs.existsSync('./save_data.json')) {
    data = JSON.parse(fs.readFileSync('./save_data.json', { encoding: 'utf8', flag: 'r' }));
  }
  return data;
}


// Writes stringified data object to 'save_data.json' using filesync.
function saveData() {
  if (fs.existsSync('./save_data.json')) {
    fs.unlinkSync('./save_data.json');
  }
  fs.writeFileSync('./save_data.json', JSON.stringify(data));
}

// Deletes the 'save_data.json' file if it exists. This is mainly to ensure full coverage of readData and getData in all testing.
function deleteSaveFile() {
  fs.unlinkSync('./save_data.json');
}

// YOU SHOULDNT NEED TO MODIFY THE FUNCTIONS BELOW IN ITERATION 1
/*
  Example usage
  let store = getData()
  console.log(store) # Prints { 'names': ['Hayden', 'Tam', 'Rani', 'Giuliana', 'Rando'] }
  names = store.names
  names.pop()
  names.push('Jake')
  console.log(store) # Prints { 'names': ['Hayden', 'Tam', 'Rani', 'Giuliana', 'Jake'] }
  setData(store)
  */
// Use get() to access the data
function getData() {
  data = readData();
  return data;
}

// Use set(newData) to pass in the entire data object, with modifications made
function setData(newData) {
  data = newData;
  saveData();
}

export { getData, setData, deleteSaveFile };

