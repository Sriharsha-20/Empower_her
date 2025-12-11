<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Creating & Removing Elements</title>
</head>
<body>

    <h2>Creating and Removing Paragraphs</h2>

    <button id="addBtn">Add Paragraph</button>
    <button id="removeBtn">Remove Last Paragraph</button>

    <div id="container" style="margin-top: 20px; border: 1px solid #000; padding: 10px;">
        <!-- Paragraphs will be added here -->
    </div>

    <script>
        const container = document.getElementById("container");
        const addBtn = document.getElementById("addBtn");
        const removeBtn = document.getElementById("removeBtn");

        // Add paragraph
        addBtn.addEventListener("click", function () {
            const p = document.createElement("p");  // create <p>
            p.textContent = "This is a new paragraph."; // set text
            container.appendChild(p); // add to div
        });

        // Remove last paragraph
        removeBtn.addEventListener("click", function () {
            const lastPara = container.lastElementChild; // find last child

            if (lastPara) {
                container.removeChild(lastPara); // remove it
            }
        });
    </script>

</body>
</html>
