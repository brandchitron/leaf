document.getElementById('leaf').addEventListener('click', function() {
    this.style.display = 'none';

    const tree = document.getElementById('tree');
    tree.classList.remove('hidden');
    tree.classList.add('show');

    const branches = document.querySelectorAll('.branch');
    setTimeout(function() {
        branches.forEach(branch => branch.classList.add('show'));
    }, 500);
});
