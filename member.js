function skillsMember() {
    var member = {
        skills: ['JavaScript', 'React', 'Angular', 'Vue', 'Node.js', 'Express', 'MongoDB', 'Docker', 'Kubernetes', 'AWS', 'GCP', 'Azure'],
        addSkill: function(skill) {
            this.skills.push(skill);
        },
        removeSkill: function(skill) {
            this.skills = this.skills.filter(function (s) {
                return s !== skill;
            });
        }
    };
    return member;
}