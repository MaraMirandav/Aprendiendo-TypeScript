// -----------------------------------------------------------------------------
// 2) Aserciones en Fetching con TypeScript
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Fetch básico con validación mínima
// -----------------------------------------------------------------------------

// URL de la API que busca repositorios públicos con la palabra "JavaScript"
const API_URL = "https://api.github.com/search/repositories?q=javascript";

// Realizamos la petición con fetch
const response = await fetch(API_URL); // await solo funciona en módulos (.mts o con import/export)

// Validamos que la respuesta sea exitosa
if(!response.ok) {
  throw new Error('Request failed'); // Si falla, lanzamos un error
}

// Creamos un tipo básico que representa la forma esperada del JSON
type APIResponse = {
  items: object[]; // Solo indicamos que items es un array de objetos genéricos
}

// Usamos aserción para decirle a TypeScript que el JSON tiene forma de APIResponse
const data = await response.json() as APIResponse; //Sin tipar con APIResponse, nos indica que data es de tipo any, por lo tanto typeScript necesita que le demos el tipo de dato.

// Iteramos sobre los elementos, pero sin saber qué propiedades tiene cada uno
const repos = data.items.map(repo => {
  console.log(repo) // No hay validación ni autocompletado, porque el tipo es muy genérico
})

//Si indicamos que es tipo APIResponse, encuentra las propiedades, pero no lo está validando
data.items.map(repo => {
  console.log(repo); // El tipo sigue siendo muy genérico
});

// -----------------------------------------------------------------------------
// Tipado correcto con Quicktype
// -----------------------------------------------------------------------------

// Tipo completo generado por Quicktype
export type GitHubAPIResponse = {
    total_count:        number;
    incomplete_results: boolean;
    items:              Item[];
}

// Tipo que representa cada repositorio
export type Item = {
    id:                          number;
    node_id:                     string;
    name:                        string;
    full_name:                   string;
    private:                     boolean;
    owner:                       Owner;
    html_url:                    string;
    description:                 null | string;
    fork:                        boolean;
    url:                         string;
    forks_url:                   string;
    keys_url:                    string;
    collaborators_url:           string;
    teams_url:                   string;
    hooks_url:                   string;
    issue_events_url:            string;
    events_url:                  string;
    assignees_url:               string;
    branches_url:                string;
    tags_url:                    string;
    blobs_url:                   string;
    git_tags_url:                string;
    git_refs_url:                string;
    trees_url:                   string;
    statuses_url:                string;
    languages_url:               string;
    stargazers_url:              string;
    contributors_url:            string;
    subscribers_url:             string;
    subscription_url:            string;
    commits_url:                 string;
    git_commits_url:             string;
    comments_url:                string;
    issue_comment_url:           string;
    contents_url:                string;
    compare_url:                 string;
    merges_url:                  string;
    archive_url:                 string;
    downloads_url:               string;
    issues_url:                  string;
    pulls_url:                   string;
    milestones_url:              string;
    notifications_url:           string;
    labels_url:                  string;
    releases_url:                string;
    deployments_url:             string;
    created_at:                  Date;
    updated_at:                  Date;
    pushed_at:                   Date;
    git_url:                     string;
    ssh_url:                     string;
    clone_url:                   string;
    svn_url:                     string;
    homepage:                    null | string;
    size:                        number;
    stargazers_count:            number;
    watchers_count:              number;
    language:                    Language | null;
    has_issues:                  boolean;
    has_projects:                boolean;
    has_downloads:               boolean;
    has_wiki:                    boolean;
    has_pages:                   boolean;
    has_discussions:             boolean;
    forks_count:                 number;
    mirror_url:                  null;
    archived:                    boolean;
    disabled:                    boolean;
    open_issues_count:           number;
    license:                     License | null;
    allow_forking:               boolean;
    is_template:                 boolean;
    web_commit_signoff_required: boolean;
    topics:                      string[];
    visibility:                  Visibility;
    forks:                       number;
    open_issues:                 number;
    watchers:                    number;
    default_branch:              DefaultBranch;
    score:                       number;
}

// Representa las ramas por defecto que puede tener un repositorio
export enum DefaultBranch {
    Dev = "dev",
    Develop = "develop",
    Main = "main",
    Master = "master",
}

// Enumeraciones para propiedades específicas
export enum Language {
    CSS = "CSS",
    HTML = "HTML",
    JavaScript = "JavaScript",
    TypeScript = "TypeScript",
}

// Tipo para la licencia del repositorio
export type License = {
    key:     string;
    name:    string;
    spdx_id: string;
    url:     null | string;
    node_id: string;
}

// Tipo para el propietario del repositorio
export type Owner = {
    login:               string;
    id:                  number;
    node_id:             string;
    avatar_url:          string;
    gravatar_id:         string;
    url:                 string;
    html_url:            string;
    followers_url:       string;
    following_url:       string;
    gists_url:           string;
    starred_url:         string;
    subscriptions_url:   string;
    organizations_url:   string;
    repos_url:           string;
    events_url:          string;
    received_events_url: string;
    type:                Type;
    user_view_type:      Visibility;
    site_admin:          boolean;
}

// Indica el tipo de propietario del repositorio (usuario o organización)
export enum Type {
    Organization = "Organization",
    User = "User",
}

// Define la visibilidad del repositorio (público, privado, etc.)
export enum Visibility {
    Public = "public",
}

// -----------------------------------------------------------------------------
// Uso del tipo generado
// -----------------------------------------------------------------------------

// Usamos el tipo generado para tipar correctamente la respuesta
const data2 = await response.json() as GitHubAPIResponse

// Ahora TypeScript sabe exactamente qué propiedades tiene cada repositorio
data2.items.map(repo => {
  return {
    name: repo.name,
    id: repo.id,
    url: repo.html_url
    //url: repo.link -> Error: no existe en el tipo Item
  }
})

