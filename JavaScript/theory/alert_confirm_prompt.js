// alert('cześć')

// confirm('siemka')

if (confirm('wybierz jakiś przycisk')) {
    alert('wybrałeś ok')
} else {
    console.log('wybrałeś cancel');
}

const name = prompt('Jakm masz na imię?', 'Janusz')
console.log(`cześć ${name}`);