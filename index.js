<script>
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
document.title=urlParams.get("name");
</script>
