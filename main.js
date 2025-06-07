(async function unfollowUsersSlowly() {
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
  const buttons = [...document.querySelectorAll('button')].filter(btn => btn.innerText === 'Following');

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].click(); // open confirmation popup
    console.log(`⌛ Prompting unfollow for #${i + 1}`);
    await delay(500);

    const confirmButton = document.querySelector('button._a9--._ap36._a9-_'); // Confirm "Unfollow"
    if (confirmButton && confirmButton.innerText === 'Unfollow') {
      confirmButton.click();
      console.log(`✅ Unfollowed #${i + 1}`);
    } else {
      console.warn(`⚠️ Could not find confirmation button at #${i + 1}`);
    }

    await delay(3000 + Math.random() * 2000); // wait 3–5s
  }
})();
