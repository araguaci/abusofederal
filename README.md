## Linha do Tempo de Abusos Federais

Fatos absurdos e não democráticos que não são evidenciados na mídia...

  - **[abusofederal.vercel.app](https://abusofederal.vercel.app/)**
  - [sources](https://substack.com/@davidagape/posts)

## Source Template

### Dev Portfolio  [![GitHub](https://img.shields.io/github/license/mayankagarwal09/dev-portfolio?color=blue)](https://github.com/mayankagarwal09/dev-portfolio/blob/master/LICENSE.md) ![visitors](https://visitor-badge.glitch.me/badge?page_id=mayankagarwal09.dev-portfolio&color=blue)

### A minimal portfolio template for Developers!

<h2 align="center">
  <img src="https://github.com/mayankagarwal09/dev-portfolio/blob/master/images/dev-portfolio.gif" alt="Dev Portfolio" />
  <br>
</h2>

### Features

⚡️ Modern UI Design + Reveal Animations\
⚡️ Made with React\
⚡️ Fully Responsive\
⚡️ Easily Customizable\
⚡️ Well organized documentation

### Demo

To view the demo: **[click here](https://dev-portfolio-mayankagarwal09.vercel.app)**

### Why do you need a portfolio? ☝️

- Professional way to showcase your work
- Increases your visibility and online presence
- better chance of getting work opportunity

---

### Getting Started 🚀

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

#### Prerequisites 📋

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [NPM](http://npmjs.com)) installed on your computer.

Also, you can use [Yarn](https://yarnpkg.com/) instead of NPM ☝️

### Setup 🔧

From your command line, first clone Dev Portfolio:

```bash
# Clone the repository
$ git clone https://github.com/mayankagarwal09/dev-portfolio

# Move into the repository
$ cd dev-portfolio

# Remove the current origin repository
$ git remote remove origin
```

After that, you can install the dependencies either using NPM or Yarn.

Using NPM: Simply run the below commands.

```bash
# Install dependencies
$ npm install --legacy-peer-deps

# Force audit fix
$ npm audit fix --force

# Start the development server
$ npm start
```

Using Yarn: Be aware of that you'll need to delete the `package-lock.json` file if exists before executing the below commands.

```bash
# Install dependencies
$ yarn

# Start the development server
$ yarn start
```

Once your server has started, go to this url `http://localhost:3000/` to see the portfolio locally.
The page will reload if you make edits.

---

## Customization Instructions:

### Step 1 - DATA & IMAGES

All customizable files are inside the `public/` folder, organised mainly into `public/images/` and `public/profile/`.
- `public/images` contains all the image assets that can be customized on website
- `public/profile` contains all text and info inside json files that can be customized according to need

### (1) NavBar

- Open `public/profile/navbar.json` 
It has 2 keys, *logo* and *sections*.

```
{
    "logo" : {
        "source": "images/logo.png",
        "height" : 45,
        "width" : 50
    },
    "sections": [
        {
            "title": "Home",
            "href": "/"
        },
        {
            "title": "About",
            "href": "/about"
        },
        {
            "title": "Skills",
            "href": "/skills"
        },
        {
            "title": "Education",
            "href": "/education"
        },
        {
            "title": "Experience",
            "href": "/experience"
        },
        {
            "title": "Projects",
            "href": "/projects"
        },
        {
            "title": "Resume",
            "href": "https://drive.google.com/file/d/13kaPsdMNDsM4LV9g7m5-E5PTildp-yYf/view?usp=sharing",
            "type": "link"
        }
    ]
}
```

| key | Description |
| ----------- | ----------- |
| logo | image you want to show as brand image on NavBar. It can be also be a simple logo with just your intitials|
| logo.source | path to the logo image |
| logo.height | height of logo |
| logo.width | width of logo |
| sections | array of sections that you want to show on Navbar as links | 
| sections.title | title of the section | 
| sections.href | link to that section. Same as *path* mentioned in `routes.json` | 
| sections.type | Opens in a new tab if value is *link*. `optional` field | 

### (2) Routes
- open `public/profile/routes.json`

```
{
    "sections": [
        {
            "component": "About",
            "path": "/about",
            "headerTitle": "About"
        },
        {
            "component": "Skills",
            "path": "/skills",
            "headerTitle": "Skills"
        },
        {
            "component": "Education",
            "path": "/education",
            "headerTitle": "Education"
        },
        {
            "component": "Experience",
            "path": "/experience",
            "headerTitle": "Experience"
        },
        {
            "component": "Projects",
            "path": "/projects",
            "headerTitle": "Projects"
        }
    ]
}
```

| key | Description |
| ----------- | ----------- |
| sections | array of sections that you want to create route for | 
| sections.component | name of the Component. No need to change it unless you want to customize the entire Component. | 
| sections.path | route for the particular section. this is the path where the particular section will be accessible | 
| sections.headerTitle | title to be shown on the top of that section page | 

- For component customization, create a component of your own inside `src/components/` and use name of that component here.

### (3) Home Section

#### Home Info
- open `public/profile/home.json`

```
{
    "name": "Your Name",
    "roles": ["a Developer", "a Freelancer"]
}
```

| key | Description |
| ----------- | ----------- |
| name | your name | 
| roles | string array separated by `,`. mention your roles here | 

#### Social Links
- open `public/profile/social.json`

```
{
    "social": [
        {
            "network" : "linkedin",
            "href": "https://linkedin.com/"
        },
        {
            "network" : "github",
            "href": "https://github.com/"
        },
        {
            "network" : "email",
            "href": "mailto:test@test.com"
        }
    ]
}
```

| key | Description |
| ----------- | ----------- |
| social | array of social links | 
| social.network | network name as provided in [react-social-icons](https://jaketrent.github.io/react-social-icons/) |
| social.href | link for particular social network |

- we are using [react-social-icons](https://jaketrent.github.io/react-social-icons/) here. you can visit it to see all available social icons to use

### (4) About Section

- open `public/profile/about.json`

```
{
    "about": " This is where you can describe about **yourself**.",
    "imageSource": "images/about/profile.png"
    
}
```

| key | Description |
| ----------- | ----------- |
| about | write about yourself, your works and goals here. `markdown` supported | 
| imageSource | path to your profile image. (recommended size 400 x 450) |

### (5) Skills Section

- open `public/profile/skills.json`

```
{
    "intro": "I love to learn new things and experiment with new technologies.\nThese are some of the major languages, technologies, tools and platforms I have worked with:",
    "skills": [{
     
            "title": "Languages",
            "items" : [
     
                {
                    "icon": "images/skills/java.png",
                    "title": "Java"
                },
                {
                    "icon": "images/skills/js.png",
                    "title": "JavaScript"
                }
        ]},
        {
            "title": "Frameworks & Technologies",
            "items" : [
                {
                    "icon": "images/skills/react.png",
                    "title": "React"
                }
            ]
        },
        {
            "title" : "Tools & Platforms",
            "items": [
                {
                    "icon": "images/skills/git.png",
                    "title": "Git"
                }
            ]
    }
]}
```

| key | Description |
| ----------- | ----------- |
| intro | small introduction line related to your skills. `markdown` supported | 
| skills | array containing skills under different categories |
| skills.title | title for category under which you want to list particular skills |
| skills.items | array containing skills for this category |
| skills.items.icon | path to skill logo |
| skills.items.title | title of skill |

- many pre existing skill logos are available inside `public/images/skills`.

### (6) Education Section

- open `public/profile/education.json`

```
{
    "education":[
        {
            "title": "Jun 20XX - Jun 20YY",
            "cardTitle": "B.Tech, Computer Science",
            "cardSubtitle":"XYZ University, City",
            "cardDetailedText": "CGPA - 9.5",
            "icon" : {
                "src": "images/education/lorem-ipsum.png"
            }
        },
        {
            "title": "Apr 20XX",
            "cardTitle": "High School",
            "cardSubtitle":"ABC School, City",
            "cardDetailedText": "Marks - 95%"
        }
    ]
}
```

| key | Description |
| ----------- | ----------- |
| education | array containing education history of a person | 
| education.title | date range during which this education was pursued or passing date |
| education.cardTitle | degree or course name |
| education.cardSubtitle | school or institute name |
| education.cardDetailedText | extra info such as marks or cgpa |
| education.icon | icon shown on the timeline. `optional` field|
| education.icon.src | path to icon |

### (7) Experience Section

- open `public/profile/experiences.json`

```
{
    "experiences": [
        {
            "title": "Software Engineer",
            "subtitle": "XYZ Ltd",
            "workType": "Full-time",
            "workDescription": [
                "Integrated **2** new product.",
                "Worked on adding **def** to **bcd**. Improved speed by 50%."
            ],
            "dateText": "06/20XX – Present"
        },
        {
            "title": "Software Engineer",
            "subtitle": "XYZ Ltd",
            "workType": "Internship",
            "workDescription": [
                "Worked on abc."
            ],
            "dateText": "01/20XX – 05/20XX"
        },
        {
            "title": "App Developer",
            "subtitle": "ABC Pvt Ltd",
            "workType": "Freelance",
            "workDescription": [
                "Developed the official apps for the startup for both Android and iOS using hybrid framework.",
                "Done bcd work."
            ],
            "dateText": "09/20XX – 01/20YY"
        }
    ]
}
```

| key | Description |
| ----------- | ----------- |
| experiences | array containing work experiences of a person | 
| experiences.title | role or designation title |
| experiences.subtitle | company or organization name. `optional` field |
| experiences.workType | type of work experience. example - internship, freelance, full-time. `optional` field |
| experiences.workDescription | string array to highlight specific points related to that work experiece. `markdown` supported |
| experiences.dateText | date range text during which particular work experience was pursued. |

### (8) Projects Section

- open `public/profile/projects.json`

```
{
    "projects" : [
        {
            "image" : "images/projects/portfolio-poster.png",
            "title": "Dev Portfolio",
            "bodyText": "- Developer Portfolio Website made in React\n -  Fully customisable and dynamic, easily change data and images.\n - Dark Mode Support",
            "links": [
                {
                    "text": "GitHub",
                    "href": "https://github.com/mayankagarwal09/dev-portfolio"
                },
                {
                    "text": "Live",
                    "href": "https://mayankagarwal.me"
                }
            ],
            "tags" : [
                "React",
                "Portfolio",
                "JavaScript"
            ]
        },
        {
            "title": "MVVM Sample App",
            "bodyText": "- An Android App that loads data from mock API and show in both **LinearLayout** and **GridLayout RecyclerView**.\n - Offline support using **Room** DB and **NetworkBoundResource**.\n - Uses the **MVVM** architecture.",
            "links": [
                {
                    "text": "GitHub",
                    "href": "https://github.com/mayankagarwal09/mvvm-sample-app"
                }
            ],
            "tags" : [
                "Kotlin",
                "Android",
                "MVVM",
                "Room",
                "Coroutines",
                "Flow",
                "Hilt-Dagger",
                "NetworkBoundResource"
            ]
        },
        {
            "title": "Task Tracker",
            "bodyText": "- A simple Task Tracker web app made with **Angular 12**.\n - Uses **mock JSON server** to get, add, delete or update tasks.",
            "links": [
                {
                    "text": "GitHub",
                    "href": "https://github.com/mayankagarwal09/task-tracker-app"
                }
            ],
            "tags" : [
                "TypeScript",
                "Angular 12",
                "JavaScript"
            ]
        }
    ]
}
```


| key | Description |
| ----------- | ----------- |
| projects | array containing projects information |
| projects.image | add project poster here. `optional` field. |
| projects.title | title of the project |
| projects.bodyText | description of project. `markdown` supported |
| projects.links | clickable links related to the project. `optional` field |
| projects.links.text | title of link to display |
| projects.links.href | actual link to be redirected to on click of the button |
| projects.tags | string array containing tags related to projects. `optional` field | 

### (9) Resume Section

- It is a clickable link which opens the link provided (generally drive link of resume file) in the navbar.json under Resume.


### Step 2 - STYLES

Change the color theme of the website -

Go to `/src/theme/themes.js` and change the values of the required components both under lightTheme and darkTheme with your prefered HEX color.


```theme
//Default Values
export const lightTheme = {
  background: '#fff',
  color: '#121212',
  accentColor: '#3D84C6',
  chronoTheme: {
    cardBgColor: 'white',
    cardForeColor: 'black',
    titleColor: 'white',
  },
  timelineLineColor: '#ccc',
  cardBackground: '#fff',
  cardFooterBackground: '#f7f7f7',
  cardBorderColor: '#00000020',
  navbarTheme: {
    linkColor: '#dedede',
    linkHoverColor: '#fefefe',
    linkActiveColor: '#fefefe',
  },
  bsPrimaryVariant: 'light',
  bsSecondaryVariant: 'dark',
  socialIconBgColor: '#121212',
};

export const darkTheme = {
  background: '#121212',
  color: '#eee',
  accentColor: '#3D84C6',
  chronoTheme: {
    cardBgColor: '#1B1B1B',
    cardForeColor: '#eee',
    titleColor: 'black',
  },
  timelineLineColor: '#444',
  cardBackground: '#060606',
  cardFooterBackground: '#181818',
  cardBorderColor: '#ffffff20',
  navbarTheme: {
    linkColor: '#dedede',
    linkHoverColor: '#fefefe',
    linkActiveColor: '#fefefe',
  },
  bsPrimaryVariant: 'dark',
  bsSecondaryVariant: 'light',
  socialIconBgColor: '#fefefe',
};

```

### Step 3 - EXTRA

Go to `public/index.html`. Change *title* and *logo* if you want to customize it.

---

## Deployment 📦

Once you finish your setup. You need to put your website online!

I highly recommend to use [Vercel](https://vercel.app) because it is super easy.

## Notable Portfolios made using this template

- [Mayank Agarwal](https://mayankagarwal09.com)

## Authors

- **Mayank Agarwal** - [https://github.com/mayankagarwal09](https://github.com/mayankagarwal09)

## Support

If you find a bug, feel free to [open an issue](https://github.com/mayankagarwal09/dev-portfolio/issues) in this repository.

## License 📄

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Timeline

```
{
    "experiences": [
        {
            "title": "Adélio ",
            "subtitle": "Clube de tiro de São José/SC",
            "workType": "Full-time",
            "workDescription": [
                "Adélio esteve no clube de tiro de São José/SC, onde estava previsto Carlos Bolsonaro treinar, mas não compareceu. Quem passou essa informação para Adélio? Quem o financiou? Ele assassinaria o Carlos?"
            ],
            "dateText": "5/julho/2018"
        },
        {
            "title": "Adélio",
            "subtitle": "Juiz de Fora/MG",
            "workType": "Internship",
            "workDescription": [
                "Pela manhã, temos imagens de Adélio se aproximando de Carlos em Juiz de Fora, e só não o alcançou porque o mesmo entrou num carro. Por questão de 1 ou 2 segundos ele estaria a seu lado. Carlos seria golpeado?"
            ],
            "dateText": "06/set/2018"
        },
        {
            "title": "Adélio",
            "subtitle": "Esfaqueia Jair Bolsonaro",
            "workType": "Freelance",
            "workDescription": [
                "Por volta das 12h Adélio esfaqueia Jair Bolsonaro. Segundo os médicos da Santa Casa de Juiz de Fora, JB sobreviveu por milagre. Além de outros ferimentos, a faca perfurou sua veia mezentéria."
            ],
            "dateText": "06/set/2018"
        },
        {
            "title": "Adélio",
            "subtitle": "Câmara dos Deputados",
            "workType": "Freelance",
            "workDescription": [
                "Alguém busca entrar na Câmara dos Deputados se passando por Adélio. Caso Adélio não fosse preso em Juiz de Fora, os assassinos teriam o álibi perfeito."
            ],
            "dateText": "06/set/2018"
        },
        {
            "title": "Adélio",
            "subtitle": "Três advogados em avião particular",
            "workType": "Freelance",
            "workDescription": [
                "Feriado nacional. Três advogados chegam a Juiz de Fora para atender Adélio. Um deles com avião particular. Chamo-os de advogados samaritanos, já que disseram estar lá por questão humanitária, queriam proteger Adélio, ou melhor, garantir que ele nada falasse sobre o mandante."
            ],
            "dateText": "07/set/2018"
        },
        {
            "title": "Delegado Rodrigo Morais",
            "subtitle": "Polícia Federal",
            "workType": "Freelance",
            "workDescription": [
                "É instalado Inquérito pela Polícia Federal, tendo o Delegado Rodrigo Morais como encarregado."
            ],
            "dateText": "---"
        },
        {
            "title": "Adélio",
            "subtitle": "Dona da pensão morre",
            "workType": "Freelance",
            "workDescription": [
                "A dona da pensão onde Adélio se hospedou em JF morreu poucas semanas depois do atentado. Outro hóspede da pensão também morreu (isso nos lembra Celso Daniel)."
            ],
            "dateText": "---"
        },
        {
            "title": "Delegado Rodrigo Morais",
            "subtitle": "lobo solitário",
            "workType": "Freelance",
            "workDescription": [
                "Tempos depois o delegado Rodrigo Morais mesmo, com todos esses indícios, concluiu que Adélio agiu sozinho, foi um "lobo solitário". Só que o tal "lobo" tinha informações privilegiadas de onde se encontravam, pelo Brasil, Jair Bolsonaro e seus filhos. Mesmo desempregado Adélio também viajava e se hospedava à "caça" de JB e seus filhos."
            ],
            "dateText": "---"
        },
        {
            "title": "Delegado Rodrigo Morais",
            "subtitle": "Diretor Geral da PF",
            "workType": "Freelance",
            "workDescription": [
                "Lula assume, nomeia Diretor Geral da PF seu amigo particular delegado Andrei. Ato contínuo, vejam só, o delegado Rodrigo Morais, aquele que nada apurou sobre a tentativa de assassinato de JB é nomeado para a mais importante diretoria da PF, a de Inteligência."
            ],
            "dateText": "Janeiro/2023"
        },
        {
            "title": "Delegado Rodrigo Morais",
            "subtitle": "Adélio não tem qualquer relação com o PCC",
            "workType": "PCC",
            "workDescription": [
                "Em operação a PF conclui que um dos advogado de Adélio, dr. Fernando Magalhães, também advoga e lava dinheiro para o PCC. Com o advogado de Adélio também foi apreendido uma aeronave, um Porsche e R$ 200 milhões são bloqueados em sua conta. O delegado Rodrigo Morais reforça que Adélio não tem qualquer relação com o PCC. São apenas coincidências: Adélio, PCC, avião, Porsche, 200 milhões..."
            ],
            "dateText": "11/junho/24"
        },
        {
            "title": "Delegado Rodrigo Morais",
            "subtitle": "Indícios foram desprezados",
            "workType": "Freelance",
            "workDescription": [
                "Nunca tantos indícios foram desprezados numa investigação da PF. Não pode ser uma simples coincidência o Delegado que nada fez para elucidar a facada pelo ex-militante do PSOL, ser nomeado para a mais importante Diretoria da PF."
            ],
            "dateText": "---"
        },
        {
            "title": "Delegado Rodrigo Morais",
            "subtitle": "Investigar Jair Bolsonaro",
            "workType": "baleia, leite condensado, presentes, cartão de vacinação, carpas...",
            "workDescription": [
                "A Diretoria de Inteligência da PF, segundo a mídia, tem como missão única investigar Jair Bolsonaro em todos os processos demandados pelo Supremo, entre outros: baleia, leite condensado, presentes, cartão de vacinação, carpas, moedas no espelho d'água, móveis desaparecidos, cloroquina, golpe de festim, etc, etc, etc..."
            ],
            "dateText": "---"
        },
        {
            "title": "Sérgio Moro",
            "subtitle": "Presidente Venceslau/SP",
            "workType": "Freelance",
            "workDescription": [
                "Presos acusados de envolvimento em plano para sequestrar e matar Sérgio Moro são assassinados a facadas dentro de penitenciária em Presidente Venceslau/SP. Queima de arquivo? Por que Adélio está vivo até hoje? Um soldado do PCC não seria jamais abandonado, obviamente..."
            ],
            "dateText": "17/junho/24"
        },
        {
            "title": "Adélio",
            "subtitle": "´Transtorno Delirante Persistente´",
            "workType": "Freelance",
            "workDescription": [
                "Adélio foi considerado portador de um ´Transtorno Delirante Persistente´ logo, tudo o que porventura ele vier a falar não vale para a Justiça. Ele está blindado pelo Sistema e protegido pelo PCC. E a PF nada apura... exceto presentes, cartão de vacinação e "gópi"..."
            ],
            "dateText": "---"
        },
        {
            "title": "Ministério da Justiça",
            "subtitle": "Presídios estão sob sigilo",
            "workType": "Freelance",
            "workDescription": [
                "O Ministério da Justiça determinou que fugas em presídios estão sob sigilo. Não se assustem se um Marcola aparecer na sua frente, ou se o Adélio concluir seu serviço contra Bolsonaro. Tudo em defesa das instituições e do Estado Democrático de Direito ..."
            ],
            "dateText": "---"
        }
    ]
}
```
