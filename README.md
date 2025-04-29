<!DOCTYPE html>
<html>
<head>
  <title>เช็คลิสต์เที่ยวตุรกี</title>
  <style>
    body { font-family: sans-serif; max-width: 600px; margin: auto; }
    h2 { color: #005f73; }
    label { display: block; margin: 5px 0; }
  </style>
</head>
<body>
  <h1>เช็คลิสต์เที่ยวตุรกี</h1>
  <div id="checklist"></div>
  <script>
    const data = { "เอกสารสำคัญ": [  "หนังสือเดินทาง (Passport)",  "วีซ่า", "ตั๋วเครื่องบินไป-กลับ"     ],
      "การเงิน": ["บัตรเครดิต", "เงินสด", "แอปธนาคาร"],  };
    const checklistDiv = document.getElementById("checklist");
    Object.entries(data).forEach(([category, items]) => {
      const title = document.createElement("h2");
      title.innerText = category;
      checklistDiv.appendChild(title);
      items.forEach((item, index) => {
        const checkboxId = `${category}-${index}`;
        const saved = localStorage.getItem(checkboxId) === "true";
        const label = document.createElement("label");
        label.innerHTML = `<input type="checkbox" id="${checkboxId}" ${saved ? "checked" : ""}> ${item}`;
        checklistDiv.appendChild(label);
        document.getElementById(checkboxId).addEventListener("change", e => {
          localStorage.setItem(checkboxId, e.target.checked);
        });
      });
    });
  </script>
</body>
</html>
