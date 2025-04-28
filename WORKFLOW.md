```markdown
# Git Feature Workflow

## 1. Feature Branch Development
- [ ] **Start from Staging**  
  ```bash
  git checkout Staging  
  git pull origin Staging
  ```
- [ ] **Create a new feature branch**  
  ```bash
  git checkout -b feature/<short-descriptor>
  ```
- [ ] **Implement your changes**  
- [ ] **Stage & commit**  
  ```bash
  git add <files>
  git commit -m "feat: <brief description>"
  ```
- [ ] **Push & open PR → Staging**  
  ```bash
  git push -u origin feature/<short-descriptor>
  ```
  • On GitHub: open PR targeting `Staging`

## 2. Merge into Staging
- [ ] Wait for CI checks to pass (lint, build, link-check)  
- [ ] Review in the Staging preview (e.g. `staging.yoursite.com`)  
- [ ] **Squash & merge** the PR into `Staging`

## 3. Verify on Staging
- [ ] Visit your staging URL  
- [ ] Confirm the new feature works as expected

## 4. Promote to Production
- [ ] **Open PR → Production**  
  • Source: `Staging` → Target: `Production`  
- [ ] Let CI run again  
- [ ] **Merge** the PR into `Production`

## 5. Optional: Tag a Release Locally
- [ ] Checkout Production & pull  
  ```bash
  git checkout Production
  git pull origin Production
  ```  
- [ ] Create an annotated tag  
  ```bash
  git tag -a vX.Y.Z -m "Release vX.Y.Z: <feature summary>"
  ```  
- [ ] Push tags to GitHub  
  ```bash
  git push origin --tags
  ```

## 6. Cleanup Feature Branch
- [ ] **Delete remote branch** (if not auto-deleted)  
  ```bash
  git push origin --delete feature/<short-descriptor>
  ```  
- [ ] **Delete local branch**  
  ```bash
  git branch -d feature/<short-descriptor>
  ```

## 7. Prep for Next Feature
- [ ] Checkout Staging & pull  
  ```bash
  git checkout Staging
  git pull origin Staging
  ```  
- [ ] Create your next `feature/<…>` branch
```

3. **Commit & push** that file:

   ```bash
   git add WORKFLOW.md
   git commit -m "docs: add Git feature workflow checklist"
   git push origin Staging
   ```

4. **Use it on your Project Board**  
   - In GitHub Projects, add a “Markdown” card and paste a link to `WORKFLOW.md` or embed its content.  
   - Or simply reference it in your issue templates or README.
