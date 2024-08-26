
// const express = require('express');
// const path = require('path');

// const app = express();
// const port = 3000;

// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'Yrokale.html'));
// });

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });

// Simulated data (for testing purposes)
  // const leadData = {
  //   facebook: {
  //     leadCount: 30,
  //     crmStatus: 'בתהליך',
  //     approvedLeads: 15,
  //     totalMoney: 7500,
  //   },
  //   google: {
  //     leadCount: 20,
  //     crmStatus: 'חדש',
  //     approvedLeads: 10,
  //     totalMoney: 5000,
  //   },
  //   twitter: {
  //       leadCount: 10,
  //       crmStatus: 'חדש',
  //       approvedLeads: 5,
  //       totalMoney: 3000,
  //   },
  // };

  // // Function to update the dashboard based on the selected lead source
  // function updateDashboard(selectedSource) {
  //   const data = leadData[selectedSource];
  //   document.getElementById('selectedSource').innerText = selectedSource;
  //   document.getElementById('leadCount').innerText = data.leadCount;
  //   document.getElementById('crmStatus').innerText = data.crmStatus;
  //   document.getElementById('approvedLeads').innerText = data.approvedLeads;
  //   document.getElementById('totalMoney').innerText = data.totalMoney;
  // }

  // // Event listener for the lead source selection
  // document.getElementById('sourceSelect').addEventListener('change', function() {
  //   const selectedSource = this.value;
  //   updateDashboard(selectedSource);
  // });

  // // Initial update with default lead source
  // updateDashboard('facebook');