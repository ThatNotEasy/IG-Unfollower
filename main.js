(async function unfollowUsersSlowly() {
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
  const buttons = [...document.querySelectorAll('button')].filter(btn => btn.innerText.trim() === 'Following');

  for (let i = 0; i < buttons.length; i++) {
    const btn = buttons[i];
    btn.scrollIntoView({ behavior: "smooth", block: "center" });
    btn.click();
    console.log(`⚡ Prompting unfollow for #${i + 1}`);

    let attempts = 0;
    while (attempts < 10) {
      const confirmButton = document.querySelector('button._a9--._ap36._a9-_');
      if (confirmButton && confirmButton.innerText.trim() === 'Unfollow') {
        confirmButton.click();
        console.log(`✅ Unfollowed #${i + 1}`);
        break;
      }
      await delay(100);
      attempts++;
    }

    const okButton = document.querySelector('button._a9--._ap36._a9_1');
    if (okButton && okButton.innerText.trim() === 'OK') {
      await delay(300);
      okButton.click();
      console.log(`🆗 Clicked OK after unfollow #${i + 1}`);
    }

  }

  console.log(`🏁 Finished. Total unfollowed: ${buttons.length}`);
})();
