
const form = document.getElementById('checklist-form');
const input = document.getElementById('item-input');
const checklist = document.getElementById('checklist');

let items = JSON.parse(localStorage.getItem('checklistItems')) || [];

function renderItems() {
    checklist.innerHTML = '';
    items.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = \`
            <input type="checkbox" \${item.done ? 'checked' : ''} onchange="toggleItem(\${index})">
            <span style="\${item.done ? 'text-decoration: line-through;' : ''}">\${item.text}</span>
            <button onclick="removeItem(\${index})" style="margin-left:auto;color:red;">ลบ</button>
        \`;
        checklist.appendChild(li);
    });
    localStorage.setItem('checklistItems', JSON.stringify(items));
}

function toggleItem(index) {
    items[index].done = !items[index].done;
    renderItems();
}

function removeItem(index) {
    items.splice(index, 1);
    renderItems();
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    items.push({ text: input.value, done: false });
    input.value = '';
    renderItems();
});

renderItems();
