<div class="tabs">
  <button onclick="showTab('games')">Games</button>
  <button onclick="showTab('apps')">Apps</button>
</div>

<div id="games" class="tab-content">Here are the games...</div>
<div id="apps" class="tab-content" style="display:none;">Here are the apps...</div>
function showTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(div => div.style.display = 'none');
  document.getElementById(tabId).style.display = 'block';
	.tabs button {
  padding: 10px;
  margin: 5px;
  background: #444;
  color: #fff;
  border: none;
  cursor: pointer;
}
.tab-content {
  padding: 10px;
  border: 1px solid #ccc;
  margin-top: 10px;
}
<p style="margin-left: 30px;">    This paragraph is indented.</p>
