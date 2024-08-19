document.addEventListener('DOMContentLoaded', function () {
    const leaf = document.getElementById('leaf');
    const canvas = document.getElementById('treeCanvas');
    const ctx = canvas.getContext('2d');
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    
    const leafColors = ['#FF0000', '#FFA500', '#FFFF00', '#008000', '#0000FF', '#4B0082', '#EE82EE'];

    leaf.addEventListener('click', function () {
        leaf.style.display = 'none';
        canvas.style.display = 'block';

        // Start tree animation
        drawTree(canvasWidth / 2, canvasHeight, -90, 9, 100, 0);
    });

    function drawTree(startX, startY, angle, depth, branchLength, colorIndex) {
        if (depth === 0) return;

        const endX = startX + branchLength * Math.cos(angle * Math.PI / 180);
        const endY = startY + branchLength * Math.sin(angle * Math.PI / 180);

        ctx.strokeStyle = '#8B4513';
        ctx.lineWidth = depth;
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();

        setTimeout(() => {
            drawTree(endX, endY, angle - 15, depth - 1, branchLength * 0.7, (colorIndex + 1) % leafColors.length);
            drawTree(endX, endY, angle + 15, depth - 1, branchLength * 0.7, (colorIndex + 1) % leafColors.length);

            // Draw leaves
            if (depth <= 2) {
                ctx.fillStyle = leafColors[colorIndex];
                ctx.beginPath();
                ctx.arc(endX, endY, 10, 0, 2 * Math.PI);
                ctx.fill();
            }
        }, 500);
    }
});
