
var vm = new Vue({
    el: '#app',
    data: function () {
        return {
            activeIndex: '1',
            name: '',
            cfg: null,
            tableData: null,
            bio_img: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
            papersData: null,
            projectData: null,
            interestsData: null,
            labData: null,
            skills: [],
            datasets: [],
            cooperations: [],
            co_authors: []
        }
    },
    created() {
        this.init()
    },
    mounted() {
        // 
    },
    methods: {
        init() {
            $.ajax({
                url: "config/setting.json",
                type: "GET",
                dataType: "json",
                success: function (res) {
                    vm.cfg = res
                    vm.tableData = [{ "column": "Email:", "content": res.Email }, { "column": "Affiliation:", "content": res.affiliation }, { "column": "Address:", "content": res.address }, { "column": "Major:", "content": res.major }]
                    vm.bio_img = res.bio_img || "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
                    vm.papersData = res.papers
                    vm.projectData = res.projects
                    vm.interestsData = res.interestes
                    vm.$refs.bio_descr.innerHTML = res.bio_descr
                    vm.name = res.name
                    vm.labData = res.lab
                    vm.skills = res.skills
                    vm.datasets = res.datasets
                    vm.cooperations = res.cooperations
                    vm.co_authors = res.co_authors
                    document.title = "Dr. " + res.name + "'s Homepage"
                }
            });
        },
        handleSelect(key, keyPath) {
            if (vm.$refs.logo.$el.className.indexOf("active") > -1 || key == "0") {
                vm.activeIndex = 1
            }
        },
    }
})