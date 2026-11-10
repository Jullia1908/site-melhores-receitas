  document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("formReceita");
    const resultado = document.getElementById("resultado");
    
    const textareaIngred = document.getElementById("ingredientes");
    const previewIngred = document.getElementById("previewIngredientes");
    
    const textareaModo = document.getElementById("modo");
const previewModo = document.getElementById("previewModo");

textareaModo.addEventListener("input", function() {
  const passos = textareaModo.value.split("\n");
  previewModo.innerHTML = passos
    .filter(p => p.trim() !== "")
    .map(p => `<li>${p}</li>`)
    .join("");
});
    
    
    // Atualiza a pré-visualização dos ingredientes
    textareaIngred.addEventListener("input", function() {
      const linhas = textareaIngred.value.split("\n");
      previewIngred.innerHTML = linhas
        .filter(l => l.trim() !== "")
        .map(l => `<li>${l}</li>`)
        .join("");
    });
    
    // Atualiza a pré-visualização do modo de preparo
    textareaModo.addEventListener("input", function() {
      const passos = textareaModo.value.split("\n");
      previewModo.innerHTML = passos
        .filter(p => p.trim() !== "")
        .map(p => `<li>${p}</li>`)
        .join("");
    });
    
    // Envio do formulário
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      
      const nome = document.getElementById("nome").value;
      const ingredientes = textareaIngred.value;
      const modo = textareaModo.value;
      const foto = document.getElementById("foto").files[0];
      
      const leitor = new FileReader();
      leitor.onload = function(e) {
        const imagemBase64 = e.target.result;
        
        resultado.innerHTML = `
            <h3>${nome}</h3>
            <img src="${imagemBase64}" alt="Foto da Receita" class="img-fluid mb-3" style="max-width: 400px;">
            
            <h5>Ingredientes:</h5>
            <ul>
              ${ingredientes.split("\n").map(i => `<li>${i.trim()}</li>`).join("")}
            </ul>

            <h5>Modo de Preparo:</h5>
            <ol>
              ${modo.split("\n").map(p => `<li>${p.trim()}</li>`).join("")}
            </ol>
          `;
      };
      
      if (foto) {
        leitor.readAsDataURL(foto);
      }
    });
  });
  