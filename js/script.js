const navToggle = () =>
{
	const navBar = document.getElementById("nav-id");

	if (navBar.className === "column-menu nav-items")
	{
			navBar.classList.add('hide')
	}
	else
	{
			navBar.classList.remove('hide');
	}
}

window.addEventListener('resize', event =>
{
	if (window.innerWidth > 900)
	{
		document.getElementById('nav-id').classList.remove('hide');
	}
	else document.getElementById('nav-id').classList.add('hide');
});