const filters = ['timekeeping', 'notimekeeping', 'dooraccess', 'finger', 'rfid', 'face', 'palm', 'lan', 'usb', 'wifi', 'adms',];
filters.forEach(id => {
  document.getElementById(id).addEventListener('change', updateResults);
});
document.getElementById('minUsers').addEventListener('input', updateResults);

function updateResults() {
  const requiredBio = {};
  const requiredConn = {};
  const requiredBtype = {};

  filters.forEach(key => {
    const checked = document.getElementById(key).checked;
    if (['timekeeping', 'notimekeeping', 'dooraccess'].includes(key)) {
      requiredBtype[key] = checked;
    } else if (['finger', 'rfid', 'face', 'palm'].includes(key)) {
      requiredBio[key] = checked;
    } else if (['lan', 'usb', 'wifi', 'adms'].includes(key)) {
      requiredConn[key] = checked;
    }
  });

  const minUsers = parseInt(document.getElementById('minUsers').value) || 0;

  const results = products.filter(product => {
    // Check btype
    for (let key in requiredBtype) {
      if (requiredBtype[key] && !product.btype[key]) return false;
    }
    // Check biometric
    for (let key in requiredBio) {
      if (requiredBio[key] && !product.bio[key]) return false;
    }
    // Check connections
    for (let key in requiredConn) {
      if (requiredConn[key] && !product.connection[key]) return false;
    }
    // Check user count
    return product.user >= minUsers;
  });

  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = results.length
    ? results.map(p => `<div class="product biometric-card poppinsfont">
      <a href="https://techfinity-jk.github.io/SalesHelper/Biometrics/${encodeURIComponent(p.name)}">${p.name}</a> - ₱${p.price} w/ ${p.warranty}
    </div>`).join('')
    : '<div>No matching products found.</div>';
}

updateResults(); // Initialize on load