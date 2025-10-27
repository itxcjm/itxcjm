
const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`2021-09-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`2024-06-07T00:00:00+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar =
      '█'.repeat(passedProgressBarIndex) +
      '▁'.repeat(progressBarCapacity - passedProgressBarIndex)
    return `{ ${progressBar} }`
}

const readme = `\
⏳ 高中生涯 ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %
<p align="center"> 
  Visitor count<br>
  <img src="https://profile-counter.glitch.me/itxcjm/count.svg" />
</p>

---
### Blog：https://www.itxcjm.top
### 主要活跃于 [@Moefire](https://github.com/moefire)
### Founder of [AS137908](https://moefire.net) (A Non-Profit & Education & Research Network operated by Moefire.)
![GithubStats](https://github-readme-stats-blue-three.vercel.app/api?username=itxcjm&show_icons=true&theme=light&layout=compact&locale=cn&include_all_commits=true&count_private=true&role=OWNER,ORGANIZATION_MEMBER,COLLABORATOR)
![Most Used Languages](https://github-readme-stats-blue-three.vercel.app/api/top-langs/?username=itxcjm&theme=light&layout=compact&count_private=true&role=OWNER,ORGANIZATION_MEMBER,COLLABORATOR)\
`

console.log(readme)
