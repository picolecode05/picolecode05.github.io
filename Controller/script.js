const dadosPinguins = {
    imperador: {
    nome: "Pinguim Imperador",
    imagem: "imagens/imperador.jpg",
    descricao: "O pinguim-imperador (Aptenodytes forsteri) é a maior e mais icônica espécie de pinguim do planeta. Com impressionantes 100 a 130 cm de altura e pesando entre 22 a 45 kg (sendo os machos ligeiramente maiores), estas aves apresentam um elegante dimorfismo sexual mínimo - machos e fêmeas compartilham a mesma plumagem imaculada: dorso e cabeça em preto profundo, contrastando dramaticamente com o ventre branco-neve, realçado por delicados tons amarelo-creme no peito e vibrantes manchas auriculares douradas.",
    tabela: `
        <div class="table-responsive mt-4">
        <table class="table table-bordered table-hover">
            <thead class="table-dark">
            <tr>
                <th colspan="2" class="text-center">Características do Pinguim Imperador</th>
            </tr>
            </thead>
            <tbody>
            <tr><th>Nome Científico</th><td><em>Aptenodytes forsteri</em></td></tr>
            <tr><th>Altura</th><td>100-130 cm</td></tr>
            <tr><th>Peso</th><td>22-45 kg</td></tr>
            <tr><th>Habitat</th><td>Antártida (regiões costeiras)</td></tr>
            <tr><th>Dieta Principal</th><td>Peixes, lulas e krill</td></tr>
            <tr><th>Expectativa de Vida</th><td>15-20 anos na natureza</td></tr>
            <tr><th>Época Reprodutiva</th><td>Inverno antártico (abril-dezembro)</td></tr>
            <tr><th>Tamanho da Ninhada</th><td>1 ovo por temporada</td></tr>
            <tr><th>Estado de Conservação</th><td><span class="badge bg-warning text-dark">Quase Ameaçado</span> (IUCN)</td></tr>
            <tr><th>Curiosidade</th><td>Única espécie que se reproduz durante o rigoroso inverno antártico</td></tr>
            </tbody>
        </table>
        </div>
    `
    },
    adelia: {
    nome: "Pinguim-de-Adélia",
    imagem: "imagens/adelia.jpg",
    descricao: "Conhecido como o verdadeiro pinguim antártico, o pinguim-de-Adélia (Pygoscelis adeliae) é uma das únicas espécies que se reproduzem exclusivamente no continente gelado, enfrentando temperaturas que podem chegar a -40°C. Seu nome homenageia Adèle Dumont d'Urville, esposa do explorador francês Jules Dumont d'Urville, que primeiro descreveu a espécie em 1840 durante expedições à Terra Adélia.",
tabela: `
    <div class="table-responsive mt-4">
    <table class="table table-bordered table-hover">
        <thead class="table-dark">
        <tr>
            <th colspan="2" class="text-center">Características do Pinguim-de-Adélia</th>
        </tr>
        </thead>
        <tbody>
        <tr><th>Nome Científico</th><td><em>Pygoscelis adeliae</em></td></tr>
        <tr><th>Altura</th><td>46-75 cm</td></tr>
        <tr><th>Peso</th><td>3.6-6 kg</td></tr>
        <tr><th>Habitat</th><td>Costas antárticas</td></tr>
        <tr><th>Dieta Principal</th><td>Krill, peixes pequenos</td></tr>
        <tr><th>Expectativa de Vida</th><td>10-20 anos</td></tr>
        <tr><th>Época Reprodutiva</th><td>Outubro a fevereiro</td></tr>
        <tr><th>Tamanho da Ninhada</th><td>2 ovos por temporada</td></tr>
        <tr><th>Estado de Conservação</th><td><span class="badge bg-success text-white">Pouco Preocupante</span> (IUCN)</td></tr>
        <tr><th>Curiosidade</th><td>Usam pedras para construir ninhos elevados que derretem menos na neve</td></tr>
        </tbody>
    </table>
    </div>
`
    },
    macaroni: {
    nome: "Pinguim Macaroni",
    imagem: "imagens/macaroni.jpg",
    descricao: " Dominando as paisagens rochosas das ilhas subantárticas, o pinguim-macaroni (Eudyptes chrysolophus) impressiona com sua exuberante crista de penas amarelo-douradas que se erguem como sobrancelhas flamejantes. Esta marcante característica, que lhe rendeu o nome curioso (uma referência aos 'macaronis' – jovens ingleses do século XVIII que usavam penteados extravagantes), contrasta dramaticamente com sua plumagem negra como carvão e ventre branco imaculado.",
    tabela: `
    <div class="table-responsive mt-4">
    <table class="table table-bordered table-hover">
        <thead class="table-dark">
        <tr>
            <th colspan="2" class="text-center">Características do Pinguim Macaroni</th>
        </tr>
        </thead>
        <tbody>
        <tr><th>Nome Científico</th><td><em>Eudyptes chrysolophus</em></td></tr>
        <tr><th>Altura</th><td>70-75 cm</td></tr>
        <tr><th>Peso</th><td>3,5-6,5 kg</td></tr>
        <tr><th>Habitat</th><td>Ilhas subantárticas</td></tr>
        <tr><th>Dieta Principal</th><td>Krill, peixes, lulas</td></tr>
        <tr><th>Expectativa de Vida</th><td>8-15 anos</td></tr>
        <tr><th>Época Reprodutiva</th><td>Outubro a março</td></tr>
        <tr><th>Tamanho da Ninhada</th><td>2 ovos por temporada</td></tr>
        <tr><th>Estado de Conservação</th><td><span class="badge bg-warning text-dark">Vulnerável</span> (IUCN)</td></tr>
        <tr><th>Curiosidade</th><td>Seu nome vem da moda europeia do século XVIII, quando jovens ostentavam acessórios chamativos chamados 'macaronis'.</td></tr>
        </tbody>
    </table>
    </div>
`
},
    gentoo: {
    nome: "Pinguim Gentoo",
    imagem: "imagens/gentoo.jpg",
    descricao: "O pinguim-gentoo (Pygoscelis papua) é uma espécie que vive na Península Antártica e em ilhas subantárticas. Conhecido por sua agilidade na água, pode atingir velocidades de até 36 km/h, sendo um dos nadadores mais rápidos entre os pinguins. É a terceira maior espécie e se adapta bem aos ambientes frios dessas regiões.",
    tabela: `
    <div class="table-responsive mt-4">
    <table class="table table-bordered table-hover">
        <thead class="table-dark">
        <tr>
            <th colspan="2" class="text-center">Características do Pinguim Gentoo</th>
        </tr>
        </thead>
        <tbody>
        <tr><th>Nome Científico</th><td><em>Pygoscelis papua</em></td></tr>
        <tr><th>Altura</th><td>51-90 cm</td></tr>
        <tr><th>Peso</th><td>4,5-8,5 kg</td></tr>
        <tr><th>Habitat</th><td>Ilhas subantárticas e Península Antártica</td></tr>
        <tr><th>Dieta Principal</th><td>Krill, peixes, lulas</td></tr>
        <tr><th>Expectativa de Vida</th><td>15-20 anos</td></tr>
        <tr><th>Época Reprodutiva</th><td>Setembro a março</td></tr>
        <tr><th>Tamanho da Ninhada</th><td>2 ovos por temporada</td></tr>
        <tr><th>Estado de Conservação</th><td><span class="badge bg-success text-white">Pouco Preocupante</span> (IUCN)</td></tr>
        <tr><th>Curiosidade</th><td>É o pinguim mais rápido nadando, atingindo até 36 km/h.</td></tr>
        </tbody>
    </table>
    </div>
`
},
    africano: {
    nome: "Pinguim Africano",
    imagem: "imagens/africano.jpg",
    descricao: "O pinguim-africano (Spheniscus demersus) é a única espécie de pinguim que vive naturalmente no continente africano, sendo encontrado principalmente nas costas da África do Sul e da Namíbia. Costuma formar colônias em ilhas rochosas e praias isoladas, onde constrói ninhos protegidos do calor intenso. Atualmente, enfrenta uma grave redução populacional devido à poluição marinha, especialmente por petróleo, e à competição com a pesca comercial por alimento. Por isso, é considerado uma espécie criticamente ameaçada.",
    tabela: `
    <div class="table-responsive mt-4">
    <table class="table table-bordered table-hover">
        <thead class="table-dark">
        <tr>
            <th colspan="2" class="text-center">Características do Pinguim Africano</th>
        </tr>
        </thead>
        <tbody>
        <tr><th>Nome Científico</th><td><em>Spheniscus demersus</em></td></tr>
        <tr><th>Altura</th><td>60-70 cm</td></tr>
        <tr><th>Peso</th><td>2,2-3,5 kg</td></tr>
        <tr><th>Habitat</th><td>Costas da África do Sul e Namíbia</td></tr>
        <tr><th>Dieta Principal</th><td>Peixes, lulas, crustáceos</td></tr>
        <tr><th>Expectativa de Vida</th><td>10-27 anos</td></tr>
        <tr><th>Época Reprodutiva</th><td>Durante todo o ano, com pico entre março e maio</td></tr>
        <tr><th>Tamanho da Ninhada</th><td>2 ovos por temporada</td></tr>
        <tr><th>Estado de Conservação</th><td><span class="badge bg-danger text-white">Em Perigo</span> (IUCN)</td></tr>
        <tr><th>Curiosidade</th><td>Sua vocalização peculiar se assemelha ao zurrar de um jumento.</td></tr>
        </tbody>
    </table>
    </div>
`
},
    rei: {
    nome: "Pinguim Rei",
    imagem: "imagens/rei.jpg",
    descricao: "O pinguim-rei (Aptenodytes patagonicus) habita principalmente as ilhas subantárticas, como a Geórgia do Sul, onde forma colônias de reprodução densas e numerosas. É adaptado a ambientes frios, mas não tão extremos quanto os enfrentados por seu parente próximo, o pinguim-imperador. Sua presença marcante nessas regiões faz dele uma das espécies mais emblemáticas do hemisfério sul.",
    tabela: `
    <div class="table-responsive mt-4">
    <table class="table table-bordered table-hover">
        <thead class="table-dark">
        <tr>
            <th colspan="2" class="text-center">Características do Pinguim-rei</th>
        </tr>
        </thead>
        <tbody>
        <tr><th>Nome Científico</th><td><em>Aptenodytes patagonicus</em></td></tr>
        <tr><th>Altura</th><td>85-95 cm</td></tr>
        <tr><th>Peso</th><td>11-16 kg</td></tr>
        <tr><th>Habitat</th><td>Ilhas subantárticas como Geórgia do Sul, Crozet e Kerguelen</td></tr>
        <tr><th>Dieta Principal</th><td>Peixes, lulas e krill</td></tr>
        <tr><th>Expectativa de Vida</th><td>15-20 anos</td></tr>
        <tr><th>Época Reprodutiva</th><td>Durante todo o ano, com picos em novembro e janeiro</td></tr>
        <tr><th>Tamanho da Ninhada</th><td>1 ovo por temporada</td></tr>
        <tr><th>Estado de Conservação</th><td><span class="badge bg-success text-white">Pouco Preocupante</span> (IUCN)</td></tr>
        <tr><th>Curiosidade</th><td>Levam mais de um ano para completar o ciclo de reprodução, alternando a incubação entre os pais.</td></tr>
        </tbody>
    </table>
    </div>
`
},
    galápagos: {
    nome: "Pinguim-de-Galápagos",
    imagem: "imagens/galapagos.jpg",
    descricao: "O pinguim-das-galápagos (Spheniscus mendiculus) vive exclusivamente nas Ilhas Galápagos e é o único da família a habitar áreas próximas ao equador. Adaptado ao clima tropical, depende de correntes marinhas frias para se alimentar e sobreviver. A espécie enfrenta sérias ameaças devido às mudanças climáticas e à presença de espécies invasoras, com uma população bastante reduzida na natureza.",
    tabela: `
    <div class="table-responsive mt-4">
    <table class="table table-bordered table-hover">
        <thead class="table-dark">
        <tr>
            <th colspan="2" class="text-center">Características do Pinguim-das-Galápagos</th>
        </tr>
        </thead>
        <tbody>
        <tr><th>Nome Científico</th><td><em>Spheniscus mendiculus</em></td></tr>
        <tr><th>Altura</th><td>48-53 cm</td></tr>
        <tr><th>Peso</th><td>2.5-4 kg</td></tr>
        <tr><th>Habitat</th><td>Ilhas Galápagos, especialmente Fernandina e Isabela</td></tr>
        <tr><th>Dieta Principal</th><td>Peixes pequenos e crustáceos</td></tr>
        <tr><th>Expectativa de Vida</th><td>15-20 anos</td></tr>
        <tr><th>Época Reprodutiva</th><td>Durante todo o ano, dependendo das condições alimentares</td></tr>
        <tr><th>Tamanho da Ninhada</th><td>2 ovos por temporada</td></tr>
        <tr><th>Estado de Conservação</th><td><span class="badge bg-danger text-white">Em Perigo</span> (IUCN)</td></tr>
        <tr><th>Curiosidade</th><td>É a única espécie de pinguim que vive em habitat tropical, adaptada às altas temperaturas.</td></tr>
        </tbody>
    </table>
    </div>
`
},
    magalhães: {
    nome: "Pinguim-de-Magalhães",
    imagem: "imagens/magalhaes.jpg",
    descricao: "OO pinguim-de-Magalhães (Spheniscus magellanicus) é comum nas regiões costeiras da Argentina e do Chile, migrando periodicamente até o litoral brasileiro. Forma colônias em praias e falésias, onde se reproduz e cuida dos filhotes. Apesar de sua ampla distribuição, enfrenta ameaças constantes, como vazamentos de petróleo e a pesca predatória, que afetam seu habitat e a disponibilidade de alimento.",
    tabela: `
    <div class="table-responsive mt-4">
    <table class="table table-bordered table-hover">
        <thead class="table-dark">
        <tr>
            <th colspan="2" class="text-center">Características do Pinguim-de-Magalhães</th>
        </tr>
        </thead>
        <tbody>
        <tr><th>Nome Científico</th><td><em>Spheniscus magellanicus</em></td></tr>
        <tr><th>Altura</th><td>60-76 cm</td></tr>
        <tr><th>Peso</th><td>2.7-6.5 kg</td></tr>
        <tr><th>Habitat</th><td>Costas temperadas da América do Sul</td></tr>
        <tr><th>Dieta Principal</th><td>Peixes, lulas e crustáceos</td></tr>
        <tr><th>Expectativa de Vida</th><td>15-20 anos</td></tr>
        <tr><th>Época Reprodutiva</th><td>Setembro a fevereiro</td></tr>
        <tr><th>Tamanho da Ninhada</th><td>2 ovos por temporada</td></tr>
        <tr><th>Estado de Conservação</th><td><span class="badge bg-warning text-dark">Quase Ameaçada</span> (IUCN)</td></tr>
        <tr><th>Curiosidade</th><td>Realizam migrações de até milhares de quilômetros em busca de alimento.</td></tr>
        </tbody>
    </table>
    </div>
`
},
    humboldt: {
    nome: "Pinguim Humboldt",
    imagem: "imagens/humboldt.jpg", 
    descricao: "O pinguim-de-Humboldt (Spheniscus humboldti) é encontrado nas regiões costeiras do Peru e do Chile, seguindo a fria corrente de Humboldt, que influencia diretamente sua alimentação. Vive em áreas rochosas e costuma formar ninhos em cavernas ou tocas. A espécie é considerada vulnerável, principalmente pela diminuição dos estoques de peixes em seu habitat natural, causada pela pesca intensiva e pelas alterações climáticas.",
    tabela: `
    <div class="table-responsive mt-4">
    <table class="table table-bordered table-hover">
        <thead class="table-dark">
        <tr>
            <th colspan="2" class="text-center">Características do Pinguim-de-Humboldt</th>
        </tr>
        </thead>
        <tbody>
        <tr><th>Nome Científico</th><td><em>Spheniscus humboldti</em></td></tr>
        <tr><th>Altura</th><td>56-70 cm</td></tr>
        <tr><th>Peso</th><td>3.6-5.9 kg</td></tr>
        <tr><th>Habitat</th><td>Costas do Peru e Chile</td></tr>
        <tr><th>Dieta Principal</th><td>Peixes e lulas</td></tr>
        <tr><th>Expectativa de Vida</th><td>15-20 anos</td></tr>
        <tr><th>Época Reprodutiva</th><td>De março a dezembro, com variações regionais</td></tr>
        <tr><th>Tamanho da Ninhada</th><td>2 ovos por temporada</td></tr>
        <tr><th>Estado de Conservação</th><td><span class="badge bg-danger text-white">Vulnerável</span> (IUCN)</td></tr>
        <tr><th>Curiosidade</th><td>O nome da espécie homenageia o naturalista alemão Alexander von Humboldt.</td></tr>
        </tbody>
    </table>
    </div>
`
},
    snares: {
    nome: "Pinguim-de-Snares", 
    imagem: "imagens/snares.jpg",
    descricao: "O pinguim-de-Snares (Eudyptes robustus) vive exclusivamente nas Ilhas Snares, ao sul da Nova Zelândia, o que o torna uma espécie endêmica e de distribuição bastante limitada. Nidifica em florestas costeiras e encostas íngremes, formando colônias densas durante a época de reprodução. Sua população é considerada quase ameaçada, principalmente pela sensibilidade a alterações climáticas e pelo risco associado ao seu habitat restrito.",
    tabela: `
    <div class="table-responsive mt-4">
    <table class="table table-bordered table-hover">
        <thead class="table-dark">
        <tr>
            <th colspan="2" class="text-center">Características do Pinguim-de-Snares</th>
        </tr>
        </thead>
        <tbody>
        <tr><th>Nome Científico</th><td><em>Eudyptes robustus</em></td></tr>
        <tr><th>Altura</th><td>50-60 cm</td></tr>
        <tr><th>Peso</th><td>2.5-4 kg</td></tr>
        <tr><th>Habitat</th><td>Ilhas Snares, Nova Zelândia</td></tr>
        <tr><th>Dieta Principal</th><td>Peixes, lulas e crustáceos</td></tr>
        <tr><th>Expectativa de Vida</th><td>15-20 anos</td></tr>
        <tr><th>Época Reprodutiva</th><td>Setembro a fevereiro</td></tr>
        <tr><th>Tamanho da Ninhada</th><td>2 ovos por temporada, mas geralmente apenas um filhote sobrevive</td></tr>
        <tr><th>Estado de Conservação</th><td><span class="badge bg-warning text-dark">Quase Ameaçada</span> (IUCN)</td></tr>
        <tr><th>Curiosidade</th><td>É uma das espécies de pinguins menos estudadas devido à inacessibilidade de seu habitat.</td></tr>
        </tbody>
    </table>
    </div>
`
},
    fiordland: {
    nome: "Pinguim-de-Fiordland",
    imagem: "imagens/fiordland.jpg",
    descricao: "O pinguim-de-Fiordland (Eudyptes pachyrhynchus) é uma espécie que habita as florestas úmidas e isoladas da Nova Zelândia. De comportamento discreto, costuma nidificar em locais bem escondidos entre raízes e rochas. A espécie está classificada como vulnerável, enfrentando ameaças principalmente de predadores introduzidos, como arminhos e gatos, que atacam ovos e filhotes.",
    tabela: `
    <div class="table-responsive mt-4">
    <table class="table table-bordered table-hover">
        <thead class="table-dark">
        <tr>
            <th colspan="2" class="text-center">Características do Pinguim-de-Fiordland</th>
        </tr>
        </thead>
        <tbody>
        <tr><th>Nome Científico</th><td><em>Eudyptes pachyrhynchus</em></td></tr>
        <tr><th>Altura</th><td>55-60 cm</td></tr>
        <tr><th>Peso</th><td>3-4.5 kg</td></tr>
        <tr><th>Habitat</th><td>Florestas costeiras e cavernas marinhas da Nova Zelândia</td></tr>
        <tr><th>Dieta Principal</th><td>Peixes, lulas e krill</td></tr>
        <tr><th>Expectativa de Vida</th><td>10-20 anos</td></tr>
        <tr><th>Época Reprodutiva</th><td>Julho a novembro</td></tr>
        <tr><th>Tamanho da Ninhada</th><td>2 ovos por temporada, mas geralmente apenas um filhote sobrevive</td></tr>
        <tr><th>Estado de Conservação</th><td><span class="badge bg-warning text-dark">Quase Ameaçada</span> (IUCN)</td></tr>
        <tr><th>Curiosidade</th><td>É um dos pinguins mais difíceis de serem observados devido ao seu habitat remoto e comportamento discreto.</td></tr>
        </tbody>
    </table>
    </div>
`
},
    azul: {
    nome: "Pinguim-Azul",
    imagem: "imagens/azul.jpg",
    descricao: "O pinguim-azul (Eudyptula minor) é encontrado nas regiões costeiras da Austrália e Nova Zelândia, onde vive tanto em áreas naturais quanto próximas a zonas urbanas. Apesar de sua capacidade de adaptação, enfrenta ameaças frequentes, como atropelamentos e a presença de predadores introduzidos, que colocam em risco sua segurança, especialmente durante a época de reprodução.",
    tabela: `
    <div class="table-responsive mt-4">
    <table class="table table-bordered table-hover">
        <thead class="table-dark">
        <tr>
            <th colspan="2" class="text-center">Características do Pinguim-Azul</th>
        </tr>
        </thead>
        <tbody>
        <tr><th>Nome Científico</th><td><em>Eudyptula minor</em></td></tr>
        <tr><th>Altura</th><td>30-40 cm</td></tr>
        <tr><th>Peso</th><td>1-1.5 kg</td></tr>
        <tr><th>Habitat</th><td>Costas e ilhas da Nova Zelândia e sul da Austrália</td></tr>
        <tr><th>Dieta Principal</th><td>Peixes pequenos, lulas e crustáceos</td></tr>
        <tr><th>Expectativa de Vida</th><td>6-20 anos</td></tr>
        <tr><th>Época Reprodutiva</th><td>Agosto a dezembro</td></tr>
        <tr><th>Tamanho da Ninhada</th><td>2 ovos por temporada</td></tr>
        <tr><th>Estado de Conservação</th><td><span class="badge bg-success text-white">Pouco Preocupante</span> (IUCN)</td></tr>
        <tr><th>Curiosidade</th><td>É conhecido por seu chamado noturno e por formar colônias próximas a áreas urbanas.</td></tr>
        </tbody>
    </table>
    </div>
`
},
    olhoamarelo: {
    nome: "Pinguim-de-Olho-Amarelo",
    imagem: "imagens/amarelo.jpg",
    descricao: "O pinguim-de-olho-amarelo (Megadyptes antipodes) é uma das espécies mais raras e é endêmico da Nova Zelândia. Enfrenta um grave risco de extinção, com uma população estimada em menos de 4.000 indivíduos, devido à perda de habitat e à ocorrência de doenças que afetam seus grupos. Seu status crítico exige atenção especial para a conservação da espécie.",
    tabela: `
    <div class="table-responsive mt-4">
    <table class="table table-bordered table-hover">
        <thead class="table-dark">
        <tr>
            <th colspan="2" class="text-center">Características do Pinguim-de-Olho-Amarelo</th>
        </tr>
        </thead>
        <tbody>
        <tr><th>Nome Científico</th><td><em>Megadyptes antipodes</em></td></tr>
        <tr><th>Altura</th><td>65-75 cm</td></tr>
        <tr><th>Peso</th><td>5-8 kg</td></tr>
        <tr><th>Habitat</th><td>Costas e florestas do sudeste da Nova Zelândia</td></tr>
        <tr><th>Dieta Principal</th><td>Peixes e lulas</td></tr>
        <tr><th>Expectativa de Vida</th><td>10-20 anos</td></tr>
        <tr><th>Época Reprodutiva</th><td>Agosto a fevereiro</td></tr>
        <tr><th>Tamanho da Ninhada</th><td>2 ovos por temporada</td></tr>
        <tr><th>Estado de Conservação</th><td><span class="badge bg-danger text-white">Em Perigo</span> (IUCN)</td></tr>
        <tr><th>Curiosidade</th><td>É considerado o pinguim mais solitário, nidificando longe de colônias.</td></tr>
        </tbody>
    </table>
    </div>
`
},
    crista: {
    nome: "Pinguim-de-Crista-Ereta",
    imagem: "imagens/crista.jpg",
    descricao: "O pinguim-de-crista-ereta (Eudyptes sclateri) vive exclusivamente nas Ilhas Antípodas e Bounty, na Nova Zelândia. Prefere áreas costeiras rochosas para nidificação, onde forma colônias durante a época reprodutiva. Por sua distribuição limitada, é uma espécie característica dessas ilhas remotas e está classificada como vulnerável.",
    tabela: `
    <div class="table-responsive mt-4">
    <table class="table table-bordered table-hover">
        <thead class="table-dark">
        <tr>
            <th colspan="2" class="text-center">Características do Pinguim-de-Crista-Ereta</th>
        </tr>
        </thead>
        <tbody>
        <tr><th>Nome Científico</th><td><em>Eudyptes sclateri</em></td></tr>
        <tr><th>Altura</th><td>50-60 cm</td></tr>
        <tr><th>Peso</th><td>2.5-4 kg</td></tr>
        <tr><th>Habitat</th><td>Ilhas Antípodas, Nova Zelândia</td></tr>
        <tr><th>Dieta Principal</th><td>Peixes, crustáceos e cefalópodes</td></tr>
        <tr><th>Expectativa de Vida</th><td>10-20 anos</td></tr>
        <tr><th>Época Reprodutiva</th><td>Outubro a fevereiro</td></tr>
        <tr><th>Tamanho da Ninhada</th><td>2 ovos, mas geralmente apenas um filhote sobrevive</td></tr>
        <tr><th>Estado de Conservação</th><td><span class="badge bg-warning text-dark">Quase Ameaçada</span> (IUCN)</td></tr>
        <tr><th>Curiosidade</th><td>É uma das espécies de pinguins menos conhecidas e mais difíceis de serem estudadas.</td></tr>
        </tbody>
    </table>
    </div>
`
},
    rockhopper: {
    nome: "Pinguim Rockhopper",
    imagem: "imagens/rockhopper.jpg",
    descricao: "O pinguim rockhopper (Eudyptes chrysocome) é conhecido pelo hábito de se deslocar pulando entre as rochas em seu habitat. É encontrado em áreas costeiras do hemisfério sul e dividido em duas subespécies: a do norte, que está ameaçada, e a do sul, considerada vulnerável.",
    tabela: `
    <div class="table-responsive mt-4">
    <table class="table table-bordered table-hover">
        <thead class="table-dark">
        <tr>
            <th colspan="2" class="text-center">Características do Pinguim-Rockhopper</th>
        </tr>
        </thead>
        <tbody>
        <tr><th>Nome Científico</th><td><em>Eudyptes chrysocome</em></td></tr>
        <tr><th>Altura</th><td>45-58 cm</td></tr>
        <tr><th>Peso</th><td>2-3.4 kg</td></tr>
        <tr><th>Habitat</th><td>Ilhas subantárticas, como Malvinas e Ilhas Crozet</td></tr>
        <tr><th>Dieta Principal</th><td>Krill, peixes e lulas</td></tr>
        <tr><th>Expectativa de Vida</th><td>10-15 anos</td></tr>
        <tr><th>Época Reprodutiva</th><td>Outubro a março</td></tr>
        <tr><th>Tamanho da Ninhada</th><td>2 ovos, mas geralmente só um filhote sobrevive</td></tr>
        <tr><th>Estado de Conservação</th><td><span class="badge bg-warning text-dark">Quase Ameaçada</span> (IUCN)</td></tr>
        <tr><th>Curiosidade</th><td>São excelentes saltadores, deslocando-se entre rochas íngremes com facilidade.</td></tr>
        </tbody>
    </table>
    </div>
`
},
    barbicha: {
    nome: "Pinguim-de-Barbicha",
    imagem: "imagens/barbicha.jpg",
    descricao: "O pinguim-de-barbicha (Pygoscelis antarcticus) recebe esse nome por uma fina linha de penas pretas sob o queixo. É uma das espécies mais comuns da Antártida, conhecido pela agilidade na água e pelo comportamento social expressivo. Embora ainda relativamente abundante, está classificado como quase ameaçado devido a pressões ambientais e mudanças no seu habitat.",
    tabela: `
    <div class="table-responsive mt-4">
    <table class="table table-bordered table-hover">
        <thead class="table-dark">
        <tr>
            <th colspan="2" class="text-center">Características do Pinguim-de-Barbicha</th>
        </tr>
        </thead>
        <tbody>
        <tr><th>Nome Científico</th><td><em>Pygoscelis antarcticus</em></td></tr>
        <tr><th>Altura</th><td>68-76 cm</td></tr>
        <tr><th>Peso</th><td>3-5 kg</td></tr>
        <tr><th>Habitat</th><td>Ilhas antárticas e subantárticas (ex.: Shetland do Sul, Orkney do Sul)</td></tr>
        <tr><th>Dieta Principal</th><td>Krill (80%), peixes e lulas</td></tr>
        <tr><th>Expectativa de Vida</th><td>15-20 anos</td></tr>
        <tr><th>Época Reprodutiva</th><td>Novembro a fevereiro</td></tr>
        <tr><th>Tamanho da Ninhada</th><td>2 ovos, ambos geralmente sobrevivem</td></tr>
        <tr><th>Estado de Conservação</th><td><span class="badge bg-warning text-dark">Quase Ameaçada</span> (IUCN)</td></tr>
        <tr><th>Curiosidade</th><td>São os pinguins mais rápidos na água, alcançando 30 km/h. Constroem ninhos com pedras, que defendem ferozmente.</td></tr>
        </tbody>
    </table>
    </div>
    `
},
};

document.getElementById('filtro-especie').addEventListener('change', function () {
    const especie = this.value;
    const conteudo = document.getElementById('conteudo');

    if (dadosPinguins[especie]) {
    const p = dadosPinguins[especie];
    conteudo.innerHTML = `
        <h2>${p.nome}</h2>
        <p style="text-align: justify;">${p.descricao}</p>
        ${p.tabela || ''}
        <img src="${p.imagem}" alt="${p.nome}" class="img-fluid d-block mx-auto my-3" style="max-width: 400px;">
    `;
    } else {
    conteudo.innerHTML = `
        <h2>Bem-vindo à Enciclopédia dos Pinguins</h2>
        <p style="text-align: justify;">O pinguim é uma ave pertencente à ordem Sphenisciformes, distribuída do continente Antártico até as ilhas Galápagos. Atualmente são descritas 18 espécies de pinguins, sendo todas elas incapazes de voar, mas excelentes nadadoras. Esses animais apresentam como adaptações ao nado a ausência de ossos pneumáticos, corpo com formato hidrodinâmico, presença de membranas interdigitais nas patas e asas adaptadas para a natação.</p>
        <img src="imagens/pinguim1.jpg" alt="Pinguim" class="d-block mx-auto mt-4 img-fluid" style="max-width: 500px;">
    `;
    }

});
