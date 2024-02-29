
https://blog.llinh9ra.ru/%d1%81%d0%be%d1%84%d1%82/%d0%b0%d0%ba%d1%82%d0%b8%d0%b2%d0%b0%d1%86%d0%b8%d1%8f-phpstorm-webstorm-intellij-idea-%d0%b8-%d0%b4%d1%80%d1%83%d0%b3%d0%b8%d0%b5-%d0%bf%d1%80%d0%be%d0%b4%d1%83%d0%ba%d1%82%d1%8b-jetbrains-%d0%b2/#comments

#crack #intelij


Operation guide: 
    1. add -javaagent:/path/to/ja-netfilter.jar=jetbrains to your vmoptions (manual or auto)
    2. log out of the jb account in the 'Licenses' window
    3. use key on page https://jetbra.in/5d84466e31722979266057664941a71893322460
    4. plugin 'mymap' has been deprecated since version 2022.1
    5. don't care about the activation time, it is a fallback license and will not expire
    6. remove Jetbrain toolbox, it maybe controls the files inside the Jetbrain products.

Enjoy it~

JBR17:
    add these 2 lines to your vmoptions file: (for manual, without any whitespace chars)
    --add-opens=java.base/jdk.internal.org.objectweb.asm=ALL-UNNAMED
    --add-opens=java.base/jdk.internal.org.objectweb.asm.tree=ALL-UNNAMED

NEW: 
    Auto configure vmoptions:
        macOS or Linux: execute "scripts/install.sh"
        Windows: double click to execute "scripts\install-current-user.vbs" (For current user)
                                         "scripts\install-all-users.vbs" (For all users)
