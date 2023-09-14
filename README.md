```java
package elianachv;

import elianachv.model.PersonalInformation;
import elianachv.model.DevSkills;
import elianachv.model.Experience;
import elianachv.model.Education;

public class About extends Me
{
    public PersonalInformation getPersonalInformation()
    {
        PersonalInformation personalInformation = new PersonalInformation();
        
        personalInformation.setName("Eliana");
        personalInformation.setLocation("Bogota, Colombia");
        personalInformation.setInterests({"Backend", "Software Architecture", "Devops"});
        personalInformation.setHobbies({"Running", "Blogs", "Traverse Flaute"});

        return personalInformation;
    }

    public DevSkills getDevSkills()
    {
        DevSkills devSkills = new DevSkills();
        
        devSkills.setProgrammingLanguages({"Java","Javascript"});
        devSkills.setBackend({"Springboot", "NodeJs", "Firebase", "Android"});
        devSkills.setFrontend({"HTML", "CSS", "React"});
        
        return devSkills;
    }

    public List<Experience> getExperience()
    {
        List<WorkExperience> experience = new ArrayList<WorkExperience>();

        experience.add(new Experience("Banco Popular", "Senior Backend Developer"));
        experience.add(new Experience("Agilpago", "Junior Android Developer"));
        experience.add(new Experience("Solutions System", "Junior Android Developer"));

        return experience;
    }

    public List<Education> getEducation()
    {
        List<Education> education = new ArrayList<Education>();

        education.add(new Education("Software Architecture", "Diplomade", "EAN University", LocalDate.parse("2023-09-05")));
        education.add(new Education("Fullstack Development", "Bootcamp", "BIT", LocalDate.parse("2020-06-10")));
        education.add(new Education("Telecommunication Engineering", "Undergraduate", "Santo Tomas University", LocalDate.parse("2021-12-04")));
        
        return education;
    }


    public String getFutureGoal()
    {
        return "Create magic with code";
    }
}
```
